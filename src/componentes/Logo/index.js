import logo from '../../img/logo.svg'
import styled from 'styled-components';

const LogoConteiner = styled.div`
  display: flex;
  font-size: 30px;
`
const ImgContainer = styled.img`
  margin-right: 10px;
`

function Logo(){
    return(
        <LogoConteiner>
          <ImgContainer
            src={logo} 
            alt='triângulo laranja, logo do site'
            />
            <p><strong>Alura</strong>Books</p>
        </LogoConteiner>
    );
}
export default Logo