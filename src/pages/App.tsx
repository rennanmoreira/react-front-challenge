import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

function App() {
  const navigation = useNavigation()

  return (
    <>
      <Navbar />
      <div className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />
      </div>
    </>
  )
}

export default App
