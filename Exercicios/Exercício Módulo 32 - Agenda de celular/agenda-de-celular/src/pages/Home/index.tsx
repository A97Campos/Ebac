import { BarraLateral } from "../../containers/BarraLateral"
import { Contato } from "../../containers/Contatos"
import { Container } from "../../styles"

const Home = () => (
    <>
        <Container>
            <BarraLateral />
            <Contato />
        </Container>
    </>
)

export default Home