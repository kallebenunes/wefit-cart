import Container from "./style"
import incrementIcon from 'assets/icons/increment.svg'
import decrementIcon from 'assets/icons/decrement.svg'

function QuantitySelector() {
    return (
        <Container>
            <button>
                <img src={decrementIcon} alt="" />
            </button>
            <p>0</p>
            <button>
                <img src={incrementIcon} alt="" />
            </button>
        </Container>
    )
}

export default QuantitySelector