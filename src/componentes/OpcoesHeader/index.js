import styled from "styled-components"

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const OpcoesContainer = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    font-size: 16px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

function OpcoesHeader() {
    return (
        <OpcoesContainer>
            {textoOpcoes.map((texto) => (
                <Opcao>
                    <p>
                        {texto}
                    </p>
                </Opcao>

            ))}
        </OpcoesContainer>
    )
}
export default OpcoesHeader