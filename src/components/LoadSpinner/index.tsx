import Container from "./style"
import loadSpinnerIcon from 'assets/icons/load-spinner.png'


function LoadSpinner (){
    return (
        <Container>
            <img src={loadSpinnerIcon} alt="" />
        </Container>
    )
}

export default LoadSpinner