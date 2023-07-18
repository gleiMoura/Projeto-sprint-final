import { FC, useRef } from 'react'
import './reset.css';
import { styled } from 'styled-components';
import Phone from "../assets/images/phone.png";
import Email from "../assets/images/email.png";
import Name from "../assets/images/name.png";

const Data: FC = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = () => {
        setTimeout(() => {
            if (formRef.current) {
                formRef.current.reset();
            }
        }, 1000)
    }

    return (
        <Main>
            <Text>
                <h2>
                    Garanta seu sucesso no ENEM com nossas aulas! Inscreva-se agora!</h2>
            </Text>
            <Section>
                <Form ref={formRef} onSubmit={handleSubmit} action='https://formsubmit.co/gle.bar.mou@gmail.com' method='POST'>
                    <div className='input-card'>
                        <img src={Name} width="50px" />
                        <input type="text" name="name" placeholder='Qual é o seu lindo nome?' required />
                    </div>
                    <div className='input-card'>
                        <img src={Phone} width="50px" />
                        <input type="tel" name="phone" placeholder='Qual é o número do seu celular?' required />
                    </div>
                    <div className='input-card'>
                        <img src={Email} width="50px" />
                        <input type="email" name="email" placeholder='Qual é o seu melhor E-mail?' required />

                    </div>
                    <input type='hidden' name="_captcha" value="false" />
                    <div className='button-card'>
                        <button type="submit">
                            Enviar
                        </button>
                    </div>
                </Form>
            </Section>
        </Main>
    )
}

export default Data;

const Main = styled.div`
    background: rgb(81, 193, 195);
    width: 100%;
    height: 80vh;
`;

const Text = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    box-sizing: border-box;
    padding: 20px;

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
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 50vh;

    input {
        width: 200px;
        height: 30px;
        padding: 5px
    }

    .input-card {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        width: 200px;
        height: 30px;
        background: #9c2100;
        color: #fff;
        border: none;
        border-radius: 5px;
        margin-top: 20px;
        cursor: pointer
    }

    .button-card {
        display: flex;
        justify-content: center;
        width: 300px;
        cursor: pointer
    }
`
