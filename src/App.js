import styled from 'styled-components'
import './App.css'
import Title from './components/Title'
import Flex from './components/Flex'
import Console from './components/Console'
import Button from './components/Button'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: #000;
`

function App() {
    return (
        <AppWrapper>
            <Flex justify='center'>
                <Title>Console Emulator v1.0</Title>
            </Flex>
            <Flex direction='column' margin='10px 0'>
                <Console/>
                <Button align='flex-end' outlined>Send</Button>
            </Flex>
        </AppWrapper>
    )
}

export default App
