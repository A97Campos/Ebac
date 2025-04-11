import requests
import time
import csv
import random
import concurrent.futures
from bs4 import BeautifulSoup

# Configurações globais
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
}

MAX_THREADS = 5  # Reduzi para evitar bloqueios

def extract_movie_details(movie_link):
    try:
        time.sleep(random.uniform(0.1, 0.3))  # Intervalo aleatório entre requisições
        response = requests.get(movie_link, headers=headers)
        response.raise_for_status()
        movie_soup = BeautifulSoup(response.content, 'html.parser')

        # Extrair título
        title = movie_soup.find('h1').get_text(strip=True) if movie_soup.find('h1') else None

        # Extrair ano de lançamento
        date = None
        date_element = movie_soup.select_one('li[data-testid="title-details-releasedate"] a')
        if date_element:
            date = date_element.get_text(strip=True)

        # Extrair avaliação
        rating = None
        rating_element = movie_soup.find('div', {'data-testid': 'hero-rating-bar__aggregate-rating__score'})
        if rating_element:
            rating = rating_element.find('span').get_text(strip=True)

        # Extrair sinopse
        plot = None
        plot_element = movie_soup.find('span', {'data-testid': 'plot-l'})
        if plot_element:
            plot = plot_element.get_text(strip=True)

        # Escrever no arquivo CSV
        with open('movies.csv', mode='a', encoding='utf-8', newline='') as file:
            writer = csv.writer(file)
            if all([title, date, rating, plot]):
                print(f"Extraído: {title} ({date}) - Avaliação: {rating}")
                writer.writerow([title, date, rating, plot])

    except Exception as e:
        print(f"Erro ao processar {movie_link}: {str(e)}")

def extract_movies(soup):
    try:
        # Novo seletor para a tabela de filmes populares
        movie_elements = soup.select('li.ipc-metadata-list-summary-item')
        movie_links = ['https://www.imdb.com' + movie.find('a')['href'] 
                      for movie in movie_elements if movie.find('a')]
        
        # Limitar a 20 filmes para teste
        movie_links = movie_links[:20]

        with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_THREADS) as executor:
            executor.map(extract_movie_details, movie_links)

    except Exception as e:
        print(f"Erro ao extrair lista de filmes: {str(e)}")

def main():
    start_time = time.time()

    try:
        # Novo URL com parâmetros atualizados
        url = 'https://www.imdb.com/chart/moviemeter/'
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')

        # Criar arquivo CSV com cabeçalho
        with open('movies.csv', mode='w', encoding='utf-8', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(['Título', 'Data de Lançamento', 'Avaliação', 'Sinopse'])

        extract_movies(soup)

    except Exception as e:
        print(f"Erro principal: {str(e)}")

    finally:
        end_time = time.time()
        print(f'Tempo total de execução: {end_time - start_time:.2f} segundos')

if __name__ == '__main__':
    main()