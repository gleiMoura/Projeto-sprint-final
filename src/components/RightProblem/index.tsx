import { styled } from "styled-components";

const RightProblem = () => {
    return (
        <Right>
            <h2>
                Estudar para o ENEM sem um suporte pode ser um problema!
            </h2>

            <p>
                1 - Dificuldade em planejar e organizar os estudos: A preparação para o ENEM requer um planejamento cuidadoso e uma distribuição adequada do tempo para cada área de conhecimento.
            </p>
            <p>
                2 - Limitações na identificação e correção de lacunas de conhecimento: Ao estudar sem suporte, pode ser difícil identificar quais são as lacunas em seu conhecimento e como corrigi-las.
            </p>
            <p>
                3 - Ausência de motivação e apoio emocional: Preparar-se para um exame importante como o ENEM pode ser desafiador emocionalmente, especialmente sem um suporte adequado.
            </p>
        </Right>
    )
};

export default RightProblem;

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    box-sizing: border-box;

    h2 {
        font-size: 20px;
        color: #000;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
    }

    @media (max-width: 1200px) {
        width: 100%;
    }
`