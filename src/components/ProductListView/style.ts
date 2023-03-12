import  styled from 'styled-components';

const Container = styled.section`
    padding: 0 1rem;
    color: ${props => props.theme.colors.dark_text};
    padding-bottom: 1rem;

    ul {
        list-style: none;
        display: grid;
        gap: 1rem;

        @media(min-width: 1024px){
            grid-template-columns: 1fr 1fr 1fr;
            padding: 0 240px;
        }
        
    }
`
export const ProductCard = styled.li`
    
    background: ${props => props.theme.colors.white};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    gap: .4rem;
    
    p {
        font-size: 12px;
        font-weight: 700;
    }

    span { 
        font-size: 16px;
        font-weight: 700;
    }

    img {
        
        width: 100%;
        max-width: 147px;
    }
`

export default Container