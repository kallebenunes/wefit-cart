import styled  from 'styled-components';

const Container = styled.button`

    background: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    display: flex;
    width: 100%;
    border: none;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    padding: .5rem;;
    gap: .4rem;

    span  {
        font-weight: 400;
    }
    
`

export default Container