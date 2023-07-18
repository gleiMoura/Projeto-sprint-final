import { FC } from "react";
import styled from "styled-components"

const Header: FC = () => {
    return (
        <Main>
            <h2>
                Use o tempo que falta para o ENEM para estudar bem a base e por meio de exercícios!
            </h2>
        </Main>
    )
};

export default Header;

const Main = styled.div`
    width: 100%;
    height: 80px;
    background: rgb(21, 83, 100);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;

    h2 {
        font-size: 20px;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
`