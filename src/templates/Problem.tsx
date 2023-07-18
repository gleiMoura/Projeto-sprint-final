import { FC } from 'react'
import './reset.css';
import LeftProblem from '../components/LeftProblem';
import RightProblem from '../components/RightProblem';
import styled from "styled-components";

const Problem: FC = () => {
    return (
        <Main>
            <Content>
                <LeftProblem />
                <RightProblem />
            </Content>
        </Main>
    )
}

export default Problem;

const Main = styled.div`
    background: #fff;
    width: 100%;
    height: 70vh;

    @media (max-width: 1200px) {
        height: auto;
    }
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    @media (max-width: 1200px) {
        flex-direction: column;
    }
`