import styled from 'styled-components'
import { Form, Link } from 'react-router-dom'
import { Flex, Grid, Row, Column } from '../styled.css.ts'
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

const ColumnFooter = styled(Column)`
  padding: 4px 4px;
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

  .logo-cannect {
    margin-bottom: 0px;
    justify-content: center;

    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  }

  .newsletter {
    padding: 0px 50px;

    h3 {
      max-width: 350px;
    }

    @media (max-width: 768px) {
      padding: 0px 0px;
      margin-bottom: 40px;
      justify-content: center;
    }
  }

  .fast-access {
    padding-right: 10px;

    @media (max-width: 768px) {
      padding-right: 0px;
      margin: 0px 60px 20px 60px;
    }

    @media (max-width: 600px) {
      margin: 20px 0px;
    }
  }

  .contact {
    @media (max-width: 768px) {
      margin: 20px 60px 20px 60px;
    }

    @media (max-width: 600px) {
      margin: 20px 0px;
    }
  }

  .method-payment {
    @media (max-width: 500px) {
      flex-wrap: wrap;
    }
  }
`

function Footer() {
  return (
    <>
      <Root as="footer">
        <Row>
          <ColumnFooter $base={24} $xs="24" $md="12" $lg="5" $xl="4" className="logo-cannect">
            <Flex style={{ WebkitBoxAlign: 'center', alignItems: 'center' }}>
              <img
                alt="logo-cannect"
                src={LogoCannect}
                style={{ width: '203px', height: '34px' }}
              />
            </Flex>
          </ColumnFooter>
          <ColumnFooter $base={24} $xs="24" $md="12" $lg="6" $xl="7" className="newsletter">
            <div>
              <H3 style={{ fontSize: '16px', marginBottom: '0px' }}>
                Assine a newsletter da Cannect para estar sempre informado sobre a
                #revoluçãoverde
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
            </div>
          </ColumnFooter>
          <ColumnFooter $base={24} $xs="24" $md="12" $lg="7" $xl="7" className="fast-access">
            <div>
              <H3>Acesso rápido:</H3>
              <Flex
                style={{
                  gap: '26px',
                  WebkitBoxPack: 'justify',
                  justifyContent: 'space-between',
                }}
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
            </div>
          </ColumnFooter>
          <ColumnFooter $base={24} $xs="24" $md="12" $lg="6" $xl="6" className="contact">
            <div>
              <H3>Fale conosco</H3>
              <a href="mailto:faleconosco@cannect.com.br" target="blank">
                faleconosco@cannect.com.br
              </a>
              <H3 style={{ marginTop: '80px' }}>Redes sociais:</H3>
              <Flex style={{ gap: '24px', flexDirection: 'row' }}>
                <a
                  href="https://www.facebook.com/cannect.life/"
                  rel="noreferrer"
                  target="_blank"
                >
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
            </div>
          </ColumnFooter>
        </Row>
        <Row style={{ marginTop: '64px' }}>
          <ColumnFooter $sm="12" $md="12" $lg="4" style={{ alignSelf: 'center' }}>
            <Paragraph>
              CANNECT SERVIÇOS DE INTERNET S/A - CNPJ: 41.418.943/0001-16 R. Dr. Renato Paes de
              Barros, 33 - Itaim Bibi, São Paulo - SP, 04530-000
            </Paragraph>
          </ColumnFooter>
          <ColumnFooter $sm="12" $md="12" $lg="5" className="method-payment">
            <Paragraph style={{ marginBottom: '14px' }}>Meios de pagamento</Paragraph>
            <img
              alt="meios de pagamento"
              src={Payments}
              style={{ height: 'fit-content', paddingLeft: '10px' }}
            />
          </ColumnFooter>
          <ColumnFooter $sm="12" $md="12" $lg="3">
            <Paragraph>Fazemos parte do programa</Paragraph>
            <img alt="endeavor logo" src={Endeavor} />
          </ColumnFooter>
        </Row>
      </Root>
    </>
  )
}

export default Footer
