import styled from "styled-components";

const Container = styled.section`
     padding: 0 1rem;
    
    div {
        background: ${props => props.theme.colors.white};
        border-radius: 4px;
        height: calc(100vh - 68px);
        max-height: 538px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        max-width: 960px;
        margin: 0 auto;

        p {
            color: ${props => props.theme.colors.dark_text};
            font-size: 20px;
            font-weight: 700;
            text-align: center;
            padding: 0 1rem;
            line-height: 27px;
        }

        a {
            color: ${props => props.theme.colors.white};            
            background: ${props => props.theme.colors.blue};
            border: none;
            border-radius: 4px;
            width: 180px;
            height: 40px;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export default Container