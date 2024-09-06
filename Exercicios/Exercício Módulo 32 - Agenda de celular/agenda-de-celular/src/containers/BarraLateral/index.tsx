import * as S from "./style"

export const BarraLateral = () => (
    <S.Aside>
        <input type="text" placeholder="Digite para buscar" />
        <S.Selecao>
            <h2>Filtre sua pesquisa</h2>
            <input type="radio" name="geral" id="geral" />
            <label htmlFor="geral">Geral</label>
            <input type="radio" name="familia" id="familia" /> 
            <label htmlFor="familia">Família</label>
            <input type="radio" name="amigos" id="amigos"/>
            <label htmlFor="amigos">Amigos</label>   
            <input type="radio" name="trabalho" id="trabalho" />
            <label htmlFor="trabalho">Trabalho</label>
        </S.Selecao>
        <button type="button">Adicionar novo contato</button>
    </S.Aside>
)