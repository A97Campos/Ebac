import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Main = styled.main`
    height: 100vh;
    padding: 40px;
`

export const Card = styled.div`
    padding: 16px;
    border-radius: 16px;
    margin-bottom: 8px;
    background-color: ${variaveis.corFamilia};
    color: #fff;
`

export const Nome = styled.h2`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 28px;
`

export const Text = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 8px;
    p {
        margin-left: 5px;
    }
`

export const Botao = styled.button`
    border: none;
    background-color: transparent;
    font-size: 28px;
    color: #fff;
    cursor: pointer;
`