import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex } from '../styled.css.ts'
import Logo from '@/assets/logo2.svg'
import LoginUserIcon from '@/assets/loginUser.svg'

const LoginButton = styled.span`
  font-family: ITC Avant Garde Gothic Std;
  font-size: 1.25rem;
  color: rgb(61, 61, 61);
  margin-left: 4px;
`

const Root = styled(Flex)`
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(217, 217, 217);
  height: 120px;
  position: fixed;
  width: 100%;
  z-index: 100;

  a {
    text-decoration: none;
    font-family: Spartan, sans-serif;
    font-size: 15px;
    color: rgb(61, 61, 61);
    font-weight: 500;
  }

  section > a {
    margin: 6px;
  }
`

export default function Component() {
  return (
    <>
      <Root as="header">
        <Flex
          as="nav"
          style={{
            width: '100%',
            maxWidth: '1440px',
            padding: '1.8rem 52px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Flex as="nav" className="menu" style={{ width: '100%' }}>
            <Link to={'/'}>
              <img
                alt="logo cannect"
                src={Logo}
                style={{ marginRight: '20px', width: '200px' }}
              />
            </Link>
            <Flex
              as="section"
              style={{
                gap: '24px',
                width: '100%',
                placeItems: 'center',
                placeContent: 'center',
              }}
            >
              <Link to={'/produtos'}>produtos</Link>
              <Link to={'/agendamento'}>agende sua consulta</Link>
              <Link to={'#'} style={{ margin: '0px' }}>
                tratamentos
              </Link>
              <Link to={'#'} style={{ margin: '0px' }}>
                para profissionais da saúde
              </Link>
              <Link to={'/area-parceiros'}>para parceiros</Link>
              <Link to={'/blog'}>blog</Link>
            </Flex>
          </Flex>
          <div>
            <div id="modalLogin" style={{ width: '80px' }}>
              <Link to={'/login'}>
                <Flex style={{ alignItems: 'center' }}>
                  <img alt="login user icon" src={LoginUserIcon} />
                  <LoginButton>Login</LoginButton>
                </Flex>
              </Link>
            </div>
          </div>
        </Flex>
      </Root>
    </>
  )
}
