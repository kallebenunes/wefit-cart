import styled  from 'styled-components';

interface Props {
    isSelected: boolean
}

const Container = styled.button<Props>`

    background: ${props => props.isSelected ? props.theme.colors.green : props.theme.colors.blue};
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
    cursor: pointer;

    span p {
        font-weight: 400;
    }

    p {
        line-height: 1;
    }
    
`

export default Container