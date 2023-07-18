import { FC } from 'react'
import './reset.css';
import Header from '../components/Header';
import LeftHome from '../components/LeftHome.tsx';
import RightHome from '../components/RightHome.tsx/index.tsx';
import styled from "styled-components";

const Home: FC = () => {
  return (
    <Main>
      <Header />
      <Content>
        <LeftHome />
        <RightHome />
      </Content>
    </Main>
  )
}

export default Home;

const Main = styled.div`
  background: rgb(81, 193, 195);
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`


