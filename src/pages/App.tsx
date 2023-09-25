import { useState } from 'react'
import styled from 'styled-components'
import { useLoaderData, Outlet, Form, NavLink, useNavigation } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const H1 = styled.h1<{ red?: boolean }>`
  color: ${({ red }) => (red && 'red') || '#645cfc'};
  font-size: 4rem;
`

function App() {
  const [count, setCount] = useState(0)
  const { contacts }: any = useLoaderData()
  const navigation = useNavigation()

  return (
    <>
      <Navbar />
      <div className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />
      </div>
      {/* <span id="detail" className={navigation.state === 'loading' ? 'loading' : ''}>
        <span>{navigation.state}</span>
      </span> */}
    </>
  )
}

export default App
