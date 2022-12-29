import Header from '../src/componentes/Header/index.js'
import styled from 'styled-components'
import Pesquisa from '../src/componentes/Pesquisa/index.js'
import UltimosLancamentos from '../src/componentes/UltimosLancamentos/index.js'

const AppContainer = styled.div`
    background-image: linear-gradient(90deg, #002f52 35%, #326589 200%);
    width: 100vw;
    height: 100vh;
`
function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa/>
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
