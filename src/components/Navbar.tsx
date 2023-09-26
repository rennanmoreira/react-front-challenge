import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex } from '../styled.css.ts'
import Logo from '@/assets/logo-cannect.svg'
import LoginUserIcon from '@/assets/login-user.svg'
import MenuIcon from '@/assets/menu.svg'

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

  a {
    text-decoration: none;
    font-family: Spartan, sans-serif;
    font-size: 15px;
    color: rgb(61, 61, 61);
    font-weight: 500;
  }

  section > a {
    margin: 6px;

    @media (max-width: 1200px) {
      margin: 0px;
    }
  }

  .menu {
    img {
      width: 162px;
      margin-right: 20px;

      @media (min-width: 1030px) {
        width: 135px;
      }

      @media (min-width: 1290px) {
        width: 200px;
      }
    }
  }

  @media (max-width: 1250px) {
    .btn-login {
      display: none;
    }
  }

  .menu-close {
    margin-top: 4px;
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
    color: rgb(61, 61, 61);
    transition: transform 0.3s ease 0s;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 1250px) {
      display: initial;
    }
  }

  .menu-links {
    gap: 24px;
    width: 100%;
    place-items: center;
    place-content: center;

    @media (max-width: 1030px) {
      display: none;
    }

    @media (max-width: 1130px) {
      gap: 14px;
    }

    @media (max-width: 1070px) {
      gap: 12px;

      a {
        font-size: 13px;
      }
    }
  }

  .container {
    padding: 1.8rem 52px;
    width: 100%;
    max-width: 1440px;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 1030px) and (max-width: 1290px) {
      padding: 1.8rem 42px;
    }

    @media (max-width: 900px) {
      padding: 1.8rem 32px;
    }
  }
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
