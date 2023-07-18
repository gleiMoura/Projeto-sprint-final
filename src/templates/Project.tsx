import { FC } from 'react'
import './reset.css';
import ProjectSection from '../components/ProjectSection';
import List from "../assets/images/lista.png"
import Personal from "../assets/images/aulas.png";
import Group from "../assets/images/group.png";
import { styled } from 'styled-components';

const Project: FC = () => {
    return (
        <Main>
            <Text>
                <h2>
                    COMO FUNCIONARÁ O PROJETO?
                </h2>
            </Text>
            <Section>
                <ProjectSection
                    image={List}
                    title="Lista de exercício"
                    text="Será disponibilizada uma lista de exercícios com questões de assuntos diferentes de física que será resolvida todos os sábados."
                />

                <ProjectSection
                    image={Group}
                    title="Aulas em grupo"
                    text="Todos os sábados teremos uma aula com duração de 2 horas onde iremos abordar 2 assuntos de física e resolveremos as questões com base nesses assuntos. A turma será composta de apenas 4 alunos!"
                />

                <ProjectSection
                    image={Personal}
                    title="Aulas personalizadas"
                    text="Você poderá escolher um dia da semana para ter uma aula particular de 1 hora para retirar dúvidas específicas sobre o assunto abordado na semana ou algum assunto que venha tendo dificuldade"
                />
            </Section>
        </Main>
    )
}

export default Project;

const Main = styled.div`
    background: rgb(81, 193, 195);
    width: 100%;
    height: 100vh;

    @media (max-width: 1200px) {
        height: auto;
    }
`;

const Text = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: center;
    padding-top: 50px;

    h2 {
        font-size: 20px;
        color: #000;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
    }
`;

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1200px) {
        flex-direction: column;
    }
`
