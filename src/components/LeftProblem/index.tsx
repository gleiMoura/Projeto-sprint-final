import Image from '../../assets/images/projeto.png';
import styled from 'styled-components';

const LeftProblem = () => {
    return (
        <Left>
            <img src={Image} width="50%" />
        </Left>
    )
};

export default LeftProblem;

const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1200px) {
        width: 100%;
    }
`