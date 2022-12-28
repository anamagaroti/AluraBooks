import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import styled from 'styled-components'
import './style.css'

const icones = [perfil, sacola]
const IconesContainer = styled.ul`
    display: flex;
    align-items: center;
`
function IconesHeader() {
    return (

        <IconesContainer>

            {icones.map((icone) => (
                <li className='icone'><img src={icone} alt='icones de perfil e carrinho'/></li>
            ))}
        </IconesContainer>
    )
}
export default IconesHeader