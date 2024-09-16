import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
`

export const Card = styled.div`
    background-color: ${variaveis.corDeFundo};
    width: 600px;
    padding: 24px;
    border-radius: 12px;
`

export const Titulo =  styled.h1`
    color: ${variaveis.verde};
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Ciclo = styled.div`
    display: inline;
    margin-bottom: 8px;
`

export const Label = styled.label`
    color: #fff;
    margin-right: 8px;
`

export const Input = styled.input`
    margin: 8px 0;
    padding: 8px;
`

export const Button = styled.button`
    padding: 8px;
    cursor: pointer;
    text-transform: uppercase;
    background-color: ${variaveis.verde};
    color: #fff;
    border: none;
`

export const Voltar = styled(Link)`
    font-size: 32px;
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
    background: transparent;
    border: none;
    color: red;
    text-decoration: none;
`