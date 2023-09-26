import { useState } from 'react'
import styled from 'styled-components'
import { useLoaderData, Outlet, Form, NavLink, useNavigation, Link } from 'react-router-dom'
import { Div, Flex, Grid, Row, Column } from '../styled.css.ts'
import LogoCannect from '@/assets/cannect-logo.png'
import Payments from '@/assets/payments.png'
import Endeavor from '@/assets/endeavor.png'

const Paragraph = styled.p`
  color: white;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 4px;
  max-width: 489px;
`

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin-bottom: 40px;
  font-family: Spartan;
`

const FooterForm = styled(Form)`
  font-weight: 500;
  width: 100%;
  font-size: 14px;
  line-height: 1.6;
  margin: 25px auto 0px;
  position: relative;
  text-align: left;
  max-width: 350px;
  background: rgb(33, 151, 110);
  border: 0px solid rgb(176, 176, 176);
  border-radius: 0px;
  color: white;

  input {
    font-weight: 600;
    font-size: 14px;
  }
`

const ColumnStart = styled(Column)`
  flex-direction: column;
  align-items: flex-start;
  -webkit-box-pack: start;
  justify-content: flex-start;
  min-width: 300px;
  width: auto;
  padding: 4px;
  margin-top: 10px;
`

const Root = styled(Flex)`
  padding: 52px;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  width: 100%;
  background-color: rgb(33, 151, 110);

  a {
    text-decoration: none;
    font-size: 16px;
    color: white;
    font-weight: 400;
  }
`

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Root as="footer">
        <Row>
          <ColumnStart $xs="12" $md="6" $lg="3" style={{ alignSelf: 'center' }}>
            <Flex style={{ WebkitBoxAlign: 'center', alignItems: 'center' }}>
              <img
                alt="logo-cannect"
                src={LogoCannect}
                style={{ width: '203px', height: '34px' }}
              />
            </Flex>
          </ColumnStart>
          <ColumnStart $xs="12" $md="6" $lg="3">
            <H3 style={{ fontSize: '16px', marginBottom: '0px' }}>
              Assine a newsletter da Cannect para estar sempre informado sobre a #revoluçãoverde
            </H3>
            <div style={{ width: '100%' }}>
              <FooterForm
                id="_form_newsletter"
                action="https://cannect13369.activehosted.com/proc.php"
                method="POST"
              >
                <div className="_form-content" style={{ width: '100%' }}>
                  <div style={{ marginBottom: '10px' }}>
                    <label
                      htmlFor="fullname"
                      style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}
                    >
                      Nome completo*
                    </label>
                    <div style={{ fontFamily: 'Nunito' }}>
                      <input
                        id="fullname"
                        name="fullname"
                        type="text"
                        required
                        placeholder="Digite seu nome"
                        style={{
                          padding: '6px',
                          border: '1px solid rgb(151, 151, 151)',
                          borderRadius: '4px',
                          fontSize: '14px',
                          width: '100%',
                          height: '45px',
                          color: 'rgb(0, 0, 0)',
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <label
                      htmlFor="email"
                      style={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        marginBottom: '5px',
                        display: 'block',
                      }}
                    >
                      Email*
                    </label>
                    <div style={{ fontFamily: 'Nunito' }}>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        required
                        placeholder="Digite seu email"
                        style={{
                          padding: '6px',
                          border: '1px solid rgb(151, 151, 151)',
                          borderRadius: '4px',
                          width: '100%',
                          height: '45px',
                          color: 'rgb(0, 0, 0)',
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      id="_form_60_submit"
                      type="submit"
                      style={{
                        width: '100%',
                        cursor: 'pointer',
                        textAlign: 'center',
                        fontSize: '16px',
                        background: 'rgb(28, 41, 96)',
                        border: '6px solid rgb(33, 151, 110)',
                        borderRadius: '9px',
                        padding: '9px',
                        color: 'white',
                      }}
                    >
                      ASSINAR A NEWSLETTER
                    </button>
                  </div>
                </div>
              </FooterForm>
            </div>
          </ColumnStart>
          <ColumnStart $xs="12" $md="6" $lg="3" style={{ marginTop: '32px' }}>
            <H3>Acesso rápido:</H3>
            <Flex
              style={{ gap: '26px', WebkitBoxPack: 'justify', justifyContent: 'space-between' }}
            >
              <Grid
                style={{
                  gap: '26px',
                  gridTemplateColumns: '1fr 1fr',
                  alignItems: 'flex-start',
                  WebkitBoxPack: 'start',
                  justifyContent: 'flex-start',
                }}
              >
                <Link to={'/sobre-nos'}>Sobre nós</Link>
                <Link to={'/area-profissionais'}>Profissionais da saúde</Link>
                <Link to={'/ecossistema-cannect'}>Cannabis medicinal</Link>
                <Link to={'/area-parceiros'}>Parceiros</Link>
                <Link to={'/produtos/1'}>Produtos</Link>
                <Link to={'politica-de-privacidade'}>Políticas de privacidade</Link>
                <Link to={'blog'}>Blog</Link>
                <Link to={'politica-de-agendamento'}>Políticas de agendamento</Link>
                <Link to={'perguntas-frequentes"'}>FAQ</Link>
              </Grid>
            </Flex>
          </ColumnStart>
          <ColumnStart $xs="12" $md="6" $lg="3">
            <H3>Fale conosco</H3>
            <a href="mailto:faleconosco@cannect.com.br" target="blank">
              faleconosco@cannect.com.br
            </a>
            <H3 style={{ marginTop: '36px' }}>Redes sociais:</H3>
            <Flex style={{ gap: '24px', flexDirection: 'row' }}>
              <a href="https://www.facebook.com/cannect.life/" rel="noreferrer" target="_blank">
                <img
                  alt="logo-facebook"
                  src="https://www.cannect.life/static/media/facebook-logo.c6c81a5e00e1ebe4e49daec74a5f6e44.svg"
                />
              </a>
              <a href="https://twitter.com/CannectLife" rel="noreferrer" target="_blank">
                <img
                  alt="logo-twitter"
                  src="https://www.cannect.life/static/media/twitter-logo.56fb2de8cc996a27c9914596673f0e42.svg"
                />
              </a>
              <a
                href="https://www.instagram.com/cannect.life/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt="logo-instagram"
                  src="https://www.cannect.life/static/media/instagram-logo.09c8d34f4a9b80efeb3976e293564e74.svg"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/cannect-saude/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt="logo-linkedin"
                  src="https://www.cannect.life/static/media/linkedin-logo.624c549ae048291a7247c0a78140c7c9.svg"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCElbcDDl-LIQCnag26MmyIg/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt="logo-youtube"
                  src="https://www.cannect.life/static/media/youtubeIcon.2f0e6ba9075cbb23f54ba734b7de5e0f.svg"
                />
              </a>
            </Flex>
          </ColumnStart>
        </Row>
        <Row style={{ gap: '56px', marginTop: '64px' }}>
          <ColumnStart style={{ alignSelf: 'center' }}>
            <Paragraph>
              CANNECT SERVIÇOS DE INTERNET S/A - CNPJ: 41.418.943/0001-16 R. Dr. Renato Paes de
              Barros, 33 - Itaim Bibi, São Paulo - SP, 04530-000
            </Paragraph>
          </ColumnStart>
          <ColumnStart>
            <Paragraph style={{ marginBottom: '14px' }}>Meios de pagamento</Paragraph>
            <img alt="meios de pagamento" src={Payments} />
          </ColumnStart>
          <ColumnStart />
          <ColumnStart>
            <Paragraph>Fazemos parte do programa</Paragraph>
            <img alt="endeavor logo" src={Endeavor} />
          </ColumnStart>
        </Row>
      </Root>
    </>
  )
}

export default Footer
