import styled from "styled-components";

const Container = styled.section`
    border-top: 1px solid ${props => props.theme.colors.gray};
    padding-top: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column-reverse;


    div {
        margin: 0 1rem;
        display: flex;
        justify-content: end;
        align-items: center;

        p {
            text-transform: uppercase;
            font-weight: 700;
            color: ${props => props.theme.colors.gray};
            font-size: 14px;
            align-items: center;
        }

        span {
            font-size: 24px;
            font-weight: 700;
            margin-left: 2rem;
        }
    }

    button {
        display: block;
        width: calc(100%);
        border: none;
        border-radius: 4px;
        padding: .5rem;
        box-sizing: border-box;
        background: ${props => props.theme.colors.blue};
        color: ${props => props.theme.colors.white};
        margin-top: 1rem;
        text-transform: uppercase;
        cursor: pointer;

    }

    @media(min-width: 1024px){
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 0;
        padding: 2rem 0;

        button {
            max-width: 235px;
            margin: 0;
        }
    }

`

export default Container