import { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import TopBar from '../components/TopBar'

const H1 = styled.h1<{ red?: boolean }>`
  color: ${({ red }) => (red && 'red') || '#645cfc'};
  font-size: 4rem;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Button>Botão Normal</Button> */}
      {/* <TomatoButton>Botão Tomate</TomatoButton> */}
      <TopBar />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <H1 red>Vite + React</H1>
      <FontAwesomeIcon icon={faEnvelope} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
