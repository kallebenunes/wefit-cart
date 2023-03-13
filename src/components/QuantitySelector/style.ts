import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    

    p {
        border: 1px solid ${props => props.theme.colors.gray};
        border-radius: 4px;
        padding: 0 1rem;
        width: 59px;
        box-sizing: border-box;
        font-weight: 300;
        height: 26px;
        align-items: center;
        display: flex;
    }

    button {
        
        width: 18px;
        height: 18px;        
        background: transparent;
        border: 0;
        cursor: pointer;
        
    }
`
export default Container
