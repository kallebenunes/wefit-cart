import styled from "styled-components";

const Container = styled.section`
background: ${props => props.theme.colors.white};
    border-radius: 4px;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;

    table {
        padding: 24px;
        width: 100%;

        img {
            max-width: 250px;
        }

        th {
            text-align: left;
            color: ${props => props.theme.colors.gray};
            text-transform: uppercase;
            padding-bottom: 1rem;
        }

        th, td {
            &:first-child {
            width: 50%;
            }

            &:nth-child(2) {
            width: 20%;
            }

            &:nth-child(3) {
            width: 30%;
            }
        }

        td {

            div {
                width: 100%;
                display: flex;
                align-items: center;
            }

        }
    }
`

export const ProductInfo = styled.div`
    img {
        width: 89px;
    }
    div {
        flex-direction: column;
        p {
            font-size: 14px;
            color: ${props => props.theme.colors.dark_text};
            font-weight: 700;
        }

        span {
            color: ${props => props.theme.colors.dark_text};
            font-weight: 700;
            font-size: 16px;
        }
    }
`

export const SubTotal = styled.div`
    display: flex;
    justify-content: space-between;

    p {
        font-size: 16px;
        font-weight: 700;
    }

    button {
        border: none;
        background: transparent;
        cursor: pointer;
    }
`

export default Container