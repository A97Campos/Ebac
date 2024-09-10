import styled from "styled-components"
import variaveis from "../../styles/variaveis"

export const Aside = styled.aside`
    background-image: linear-gradient(to top right, ${variaveis.corDeFundo}, ${variaveis.corDeFundo2});
    color: #fff;
    height: 100vh;
    padding: 40px 20px;
`

export const Titulo = styled.h2`
    margin: 16px 0;
`

export const InputPesquisar = styled.input`
    padding: 8px;
    margin-bottom: 16px;
    border: none;
    border-radius: 8px;
    width: 100%;
`
export const Botao = styled.button`
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    text-transform: uppercase;
    background-color: ${variaveis.verde};
    color: #fff;
    border: none;
`