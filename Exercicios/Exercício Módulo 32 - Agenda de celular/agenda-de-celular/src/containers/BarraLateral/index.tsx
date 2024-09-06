import * as S from "./style"

export const BarraLateral = () => (
    <S.Aside>
        <S.InputPesquisar type="text" placeholder="Digite para buscar" />
        <S.Selecao>
            <S.Titulo>Filtre sua pesquisa</S.Titulo>
            <div>
                <input type="radio" name="geral" id="geral" />
                <label htmlFor="geral">Geral</label>
            </div>
            <div>
                <input type="radio" name="familia" id="familia" /> 
                <label htmlFor="familia">Família</label>
            </div>
            <div>
                <input type="radio" name="amigos" id="amigos"/>
                <label htmlFor="amigos">Amigos</label>   
            </div>
            <div>
                <input type="radio" name="trabalho" id="trabalho" />
                <label htmlFor="trabalho">Trabalho</label>
            </div>
        </S.Selecao>
        <S.Botao type="button">Adicionar novo contato</S.Botao>
    </S.Aside>
)