import styled from "styled-components"

const LeftHome = () => {
    const handleScrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <Left className="left_home">
            <div>
                <h1>
                    Um projeto totalmente focado nas necessidades dos alunos. Damos o suporte que você precisa para ir além nos seus estudos.
                </h1>
                <p>
                    Através de aulas que focam no que realmente é importante você pode evoluir de maneira mais rápida.
                </p>
            </div>

            <button onClick={handleScrollToBottom} className="convert_button">
                Quero Participar!
            </button>
        </Left>
    )
};

export default LeftHome;

const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 30px;

    button {
        width: 200px;
        height: 50px;
        border-radius: 10px;
        border: none;
        margin-top: 50px;
        cursor: pointer;
        background-color: #9c2100;
        color: #fff
    }

    h1 {
        font-size: 30px;
        font-weight: 500;
    }

    @media (max-width: 1200px) {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        justify-content: space-around;
        
        button {
            margin-top: 0;
        }
    }
`