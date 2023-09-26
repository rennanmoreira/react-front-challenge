import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex } from '../styled.css.ts'
import Logo from '@/assets/logo-cannect.svg'
import LoginUserIcon from '@/assets/login-user.svg'
import MenuIcon from '@/assets/menu.svg'
import navbarStyles from '@/assets/styles/navbar.scss?inline'

const LoginButton = styled.span`
  font-family: ITC Avant Garde Gothic Std;
  font-size: 1.25rem;
  color: rgb(61, 61, 61);
  margin-left: 4px;
`

const Root = styled(Flex)`
  background-color: white;
  border-bottom: 1px solid rgb(217, 217, 217);
  height: 120px;
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  @media (max-width: 1030px) {
    height: 110px;
  }

  ${navbarStyles}
`

export default function Component() {
  return (
    <>
      <Root as="header">
        <Flex className="container">
          <Flex as="nav" className="menu" style={{ width: '100%' }}>
            <Link to={'/'} style={{ alignSelf: 'center' }}>
              <img alt="logo cannect" src={Logo} />
            </Link>
            <Flex as="section" className="menu-links">
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
            <div className="btn-login" style={{ width: '80px' }}>
              <Link to={'/login'}>
                <Flex style={{ alignItems: 'center' }}>
                  <img alt="login user icon" src={LoginUserIcon} />
                  <LoginButton>Login</LoginButton>
                </Flex>
              </Link>
            </div>

            <button className="menu-close">
              <img src={MenuIcon} alt="menu-icon" width="33" height="29" />
            </button>
          </div>
        </Flex>
      </Root>
    </>
  )
}
