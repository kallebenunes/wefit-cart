import styled from "styled-components";

const Container = styled.section`

    background: ${props => props.theme.colors.white};
    height: calc(100vh - 68px - 1rem);
    margin: 0 1rem 1rem 1rem;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    ul {
        list-style: none;
        padding: 1rem;

        li {
            margin-bottom: 1rem;
            section {
                width: 100%;
                display: flex;
                flex-direction: column;
            }
            display: flex;
            > img {
                width: 64px;
                margin-right: 1rem;
            }
        }
    }

`

export const SummaryTop = styled.div`
    padding-top: .3rem;
    display: flex;
    justify-content: space-between;
    flex: 1;

    p {
        font-size: 14px;
        font-weight: 700;
    }

    span {
        font-size: 16px;
        font-weight: 700;
    }

    button {
        background: transparent;
        border: none;
        display: flex;

        img {
            width: 16px;
        }
    }
`

export const SummaryBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: .5rem;
    span {
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        &::before {
            content: 'Subtotal';
            text-transform: uppercase;
            color: ${props => props.theme.colors.gray};
            display: block;
            font-size: 12px;
            font-weight: 700;
            text-align: center;
        }
    }
`



export default Container