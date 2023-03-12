import styled from 'styled-components';

const Container = styled.section`
    height:  calc(100vh - 68px);
    display: flex;
    justify-content: center;
    align-items: center;

    @media(min-width: 1024px){
        height:  calc(100vh - 74px);
        
    }

    img {
        animation: rotate .6s linear infinite;;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`

export default Container 