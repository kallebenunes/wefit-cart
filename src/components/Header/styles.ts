import styled from "styled-components";

const Container = styled.header`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 0 .5rem;
    height: 68px;
    max-width: 960px;
    margin: 0 auto;


    @media(min-width: 1024px){
        height: 74px;
    }

`

export const CartSummary = styled.section`
        display: flex;  
        align-items: center;
        gap: .4rem;
        color: ${props => props.theme.colors.white};
        cursor: pointer;

        div {
            flex-direction: column;

            p {
                display: none;

                @media (min-width: 1024px){
                    display: block;
                }
            }
        }

        span {
            color: ${props => props.theme.colors.gray};
        }

`

export default Container