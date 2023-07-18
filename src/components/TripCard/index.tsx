import { FC } from "react";
import TripPhoto from "../../assets/images/trip.png";
import { styled } from "styled-components";

interface TripProps {
    text: string
}

const TripCard: FC<TripProps> = ({ text }) => {
    return (
        <Card>
            <img src={TripPhoto} />
            <p className="text">{text}</p>
        </Card>
    )
};

export default TripCard;

const Card = styled.div`
    width: 80%;
    height: 120px;
    display: flex;
    background: #f14d24;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    border-radius: 10px;
    padding: 0 10px;

    img {
        height: 80%;
        border-radius: 50%
    }

    p {
        color: #fff;
        margin-left: 10px;
        font-family: "Roboto", sans-serif;
        font-weight: 800
    }
`