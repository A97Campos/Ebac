import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Card = styled.div`
    max-width: 500px;
    padding: 16px;
    border-radius: 16px;
    margin-bottom: 8px;
    background-color: ${variaveis.corFamilia};
    color: #fff;
`

export const Nome = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`

export const NomeTitulo = styled.h2`
    font-size: 28px;
`

export const Text = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 8px;
`

export const Input = styled.input`
    margin-left: 12px;
    color: white;
    border: none;
    background: transparent;
`

export const Botao = styled.button`
    border: none;
    background-color: transparent;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    margin-left: 8px;
`