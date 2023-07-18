import { styled } from 'styled-components';
import Image from '../../assets/images/estudos_1.jpg';

const RightHome = () => {
    return (
        <Right className='right_home'>
            <img src={Image} className='right_home_image' />
        </Right>
    )
};

export default RightHome;

const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;

    img {
        width: 100%;
        border-radius: 20px
    }

    @media (max-width: 1200px) {
        width: 100%;
        max-width: 700px;
        box-sizing: border-box;
    }
`