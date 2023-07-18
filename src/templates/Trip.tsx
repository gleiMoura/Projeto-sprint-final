import { FC } from 'react'
import './reset.css';
import TripCard from '../components/TripCard';
import { styled } from 'styled-components';

const Trip: FC = () => {
    return (
        <Main>
            <Text>
                <h2>Como serão as aulas</h2>
                <p>Abordaremos em cada semana os assuntos mais cobrados na prova de física</p>
            </Text>
            <Cards>
                <TripCard text="Semana 1: Cinemática" />
                <TripCard text="Semana 2: Dinâmica" />
                <TripCard text="Semana 3: Hidrostática" />
                <TripCard text="Semana 4: Ondulatória" />
                <TripCard text="Semana 5: Óptica" />
                <TripCard text="Semana 6: Eletrodinâmica" />
                <TripCard text="Semana 7: Magnetismo" />
                <TripCard text="Semana 8: Calorimetria" />
                <TripCard text="Semana 9: Termodinâmica" />
                <TripCard text="Semana 10: Usinas de eletricidade" />
            </Cards>
        </Main>
    )
}

export default Trip;

const Main = styled.div`
    background: #fff;
    width: 100%;
    height: auto;
`;

const Text = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    box-sizing: border-box;
    padding: 20px;

    h2 {
        font-size: 20px;
        color: #000;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
`

