import { FC } from "react";
import { styled } from "styled-components";

interface Props {
    image: any;
    text: string;
    title: string
}

const ProjectSection: FC<Props> = ({ image, title, text }) => {
    return (
        <Card>
            <div className="card-image">
                <img height="80px" src={image} />
            </div>
            <p >
                {title}
            </p>

            <span>
                {text}
            </span>
        </Card>
    )
};

export default ProjectSection;

const Card = styled.div`
    width: 250px;
    height: 60vh;
    background: #fff;

    .card-image {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center
    }

    p {
        padding: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #9c2100;
        font-size: 18px;
        font-family: Roboto;
        font-weight: 800;
    }

    span {
        padding: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-family: Roboto;
        font-weight: 300;
        color: #707780;
    }

    @media (max-width: 1200px) {
        height: auto;
        margin-bottom: 20px;
    }
`