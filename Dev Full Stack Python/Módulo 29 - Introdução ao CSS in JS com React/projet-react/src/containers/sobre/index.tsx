import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias corrupti
      deserunt recusandae minus error totam repudiandae cupiditate
      exercitationem unde officia mollitia facere deleniti sapiente, illum quasi
      repellat modi. Reprehenderit, laudantium!
    </Paragrafo>

    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=a97campos&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=a97campos&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
