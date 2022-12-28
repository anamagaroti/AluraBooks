import Logo from '../Logo/index.js';
import  ListaHeader from '../OpcoesHeader/index.js'
import  IconesHeader from '../IconesHeader/index.js'
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <ListaHeader />
            <IconesHeader />
        </HeaderContainer>
    )

} export default Header 
