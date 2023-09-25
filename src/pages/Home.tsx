import styled from 'styled-components'
import Footer from '../components/Footer'
import { Flex } from '../styled.css.ts'
import { Link } from 'react-router-dom'

const Root = styled.div`
  padding: 120px 0 0;
  flex-flow: column;
  place-content: center space-between;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: 14px Nunito;

  span {
    font-weight: 700;
  }

  #section-welcome {
    p {
      font-size: 17px;
      font-weight: 600;
    }
  }

  #section-way {
    -webkit-box-pack: justify;
    padding: 0px 48px 110px;
    flex-wrap: wrap;

    img {
      width: 360px;
      cursor: pointer;
    }
  }

  #section-ecosystem {
    padding: 58px 48px;
    gap: 28px;
    background: url('https://www.cannect.life/static/media/about-us-banner.84fb00017b87e43803e4.png')
      0% 0% / cover no-repeat;
    width: 100vw;
    position: relative;
    left: calc(-50vw + 50%);
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
  }

  #section-science {
    padding: 92px 0px 100px 48px;
    flex-direction: column;
    align-items: flex-start;
    -webkit-box-pack: center;
    justify-content: center;

    img {
      width: 216px;
    }
  }

  #section-process {
    padding: 0px 0px 100px 48px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;

    img {
      width: 33px;
    }
  }

  #section-tabu {
    gap: 135px;
    padding: 0px 48px;
    flex-direction: row;
    position: relative;

    h3 {
      max-width: 680px;
      font-size: 32px;
      font-weight: 500;
      color: rgb(61, 61, 61);
    }

    p {
      max-width: 680px;
      flex-direction: column;
      font-size: 21px;
      font-weight: 400;
      line-height: 145%;
      letter-spacing: -0.045em;
      margin-bottom: 10px;
    }
  }

  #section-real-history {
    padding: 170px 0px 100px 48px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
  }

  #section-parceiros {
    gap: 135px;
    padding: 0px 48px 90px;
    display: flex;
    flex-direction: row;
    position: relative;
  }

  #section-novidades {
    padding: 0px 0px 100px 48px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;

    a {
      text-decoration: none;
    }
  }
`
const H2 = styled.h2`
  font-size: 40px;
  font-weight: 400;
  color: rgb(61, 61, 61);
  margin-bottom: 40px;
`

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: rgb(61, 61, 61);
`

const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: rgb(61, 61, 61);
`

const PageWrapper = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const PageContent = styled.div`
  width: 100%;
  max-width: 1440px;
`

const Section = styled.section`
  padding: 64px 48px 58px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TextSection = styled.div`
  max-width: 725px;
  min-width: 660px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const Heading = styled.h1`
  font-size: 50px;
  font-weight: 400;
  line-height: 140.5%;
  color: rgb(61, 61, 61);

  span {
    font-weight: 600;
    color: rgb(33, 151, 110);
  }
`

const ButtonsContainer = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  text-decoration: none;
`

const Button = styled.button`
  gap: 0.5rem;
  padding: 1rem;
  transition: transform 0.2s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 48px;
  font-weight: 500;
  border-radius: 5px;
  width: 252px;
`

const ConsultationButton = styled(Button)`
  background: rgb(17, 88, 80);
  border: 1px solid rgb(17, 88, 80);
  background-color: rgb(61, 61, 61);
  color: white;
`

const TreatmentButton = styled(Button)`
  background: white;
  border: 2px solid rgb(33, 151, 110);
  color: rgb(61, 61, 61);
`

const BannerSection = styled.div`
  gap: 20px;
  display: flex;
  align-items: flex-start;
`

const BannerImage = styled.img`
  max-inline-size: 100%;
  block-size: auto;
  height: auto;
  object-fit: contain;
  min-width: min-content;
`

const Home = () => {
  return (
    <>
      <Root id="main-app-container">
        <PageWrapper id="page-wrapper">
          <PageContent className="page-content">
            <Section id="section-welcome">
              <TextSection>
                <Flex
                  style={{
                    gap: '19px',
                    textAlign: 'start',
                    maxWidth: '825px',
                    flexDirection: 'column',
                    marginBottom: '32px',
                  }}
                >
                  <Heading>
                    Inicie <span>seu tratamento</span> <br /> com{' '}
                    <span>cannabis medicinal</span>
                  </Heading>
                  <Paragraph>
                    A Cannect pode te ajudar em seu caminho para uma vida melhor. <br />{' '}
                    Cuidamos de você em todo o processo, faça parte da revolução verde!
                  </Paragraph>
                </Flex>
                <ButtonsContainer>
                  <ConsultationButton>
                    <p style={{ color: 'white' }}>Agende sua consulta</p>
                  </ConsultationButton>
                  <TreatmentButton>
                    <p style={{ color: 'rgb(61, 61, 61)' }}>Inicie seu tratamento</p>
                  </TreatmentButton>
                </ButtonsContainer>
              </TextSection>
              <BannerSection>
                <BannerImage
                  src="https://www.cannect.life/static/media/banner-image-1.c2bdae1e8783e153b00f.webp"
                  alt="banner"
                  style={{ marginTop: '-34px' }}
                />
                <BannerImage
                  src="https://www.cannect.life/static/media/banner-image-2.69443d255f1ca027ad58.webp"
                  alt="banner"
                />
              </BannerSection>
            </Section>

            <Section id="section-way">
              <h2
                style={{
                  width: '100%',
                  fontWeight: 400,
                  fontSize: '40px',
                  lineHeight: '155%',
                  marginBottom: '45px',
                  color: 'rgb(61, 61, 61)',
                }}
              >
                <span>Seu caminho</span> para uma <span>vida melhor:</span>
              </h2>
              <Flex
                id="inicie-seu-tratamento"
                style={{
                  WebkitBoxAlign: 'center',
                  alignItems: 'center',
                  WebkitBoxPack: 'justify',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <img
                  alt="não tenho receita"
                  src="https://www.cannect.life/static/media/nao-tenho-receita.9c7b86ff6dd86a16a7d7.png"
                />
                <img
                  alt="Receita Branca"
                  src="https://www.cannect.life/static/media/receita-branca.96ba82ca0a81b75b0e99.png"
                />
                <img
                  alt="Receita especial"
                  src="https://www.cannect.life/static/media/receita-especial.863307e14bad6e71f3c9.png"
                />
              </Flex>
            </Section>

            <Section id="section-ecosystem">
              <Flex
                style={{
                  margin: '0px auto',
                  maxWidth: '1440px',
                  width: '100%',
                  WebkitBoxPack: 'justify',
                  justifyContent: 'space-between',
                }}
              >
                <Flex
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '840px',
                  }}
                >
                  <h2
                    style={{
                      fontSize: '50px',
                      fontWeight: 400,
                      color: 'rgb(250, 250, 250)',
                      marginBottom: '62px',
                    }}
                  >
                    Somos o <span>maior ecossistema de cannabis</span> da{' '}
                    <span>América Latina</span>
                  </h2>
                  <p
                    style={{
                      fontSize: '21px',
                      fontWeight: 400,
                      color: 'rgb(250, 250, 250)',
                    }}
                  >
                    Conectamos centenas de pacientes, médicos, instituições de saúde,
                    pesquisadores e fornecedores todas as semanas para facilitar o acesso à
                    cannabis medicinal e educar para desmistificar o preconceito sobre seu uso.
                  </p>
                  <Button
                    style={{
                      border: '2px solid rgb(217, 217, 217)',
                      background: 'transparent',
                      transition: 'all 0.3s ease 0s',
                      width: '222px',
                      height: '45px',
                      marginTop: '35px',
                      fontSize: '19px',
                      color: 'rgb(250, 250, 250)',
                    }}
                  >
                    conheça mais
                  </Button>
                </Flex>
                <img
                  alt="about us logos"
                  src="https://www.cannect.life/static/media/about-us-logos.d6f1eb10f2272cb0b230.png"
                />
              </Flex>
            </Section>

            <Section id="section-science">
              <H2>
                Encontre
                <span style={{ color: 'rgb(33, 151, 110)' }}>ciência, saúde e bem-estar</span>
              </H2>
              <Flex
                style={{
                  gap: '22px',
                  transition: 'color 0.3s ease 0s',
                  width: '100%',
                  WebkitBoxAlign: 'center',
                  alignItems: 'center',
                  paddingBottom: '12px',
                  overflowX: 'auto',
                  color: 'rgba(0, 0, 0, 0)',
                }}
              >
                <Link to={'/produtos/1?shape_id=1'}>
                  <img
                    alt="produto Oleo"
                    src="https://www.cannect.life/static/media/oil.db0bca1af0202dbb5dcb.png"
                  />
                </Link>
                <Link to={'/produtos/1?shape_id=6'}>
                  <img
                    alt="produto Gummy"
                    src="https://www.cannect.life/static/media/gummy.ef7b010b10aeb50ebbf4.png"
                  />
                </Link>
                <Link to={'/produtos/1?shape_id=2'}>
                  <img
                    alt="produto capsula"
                    src="https://www.cannect.life/static/media/capsula.2c1fe52719db38c5e309.png"
                  />
                </Link>
                <Link
                  to={
                    '/produtos/1?shape_id=28&shape_id=17&shape_id=5&shape_id=10&shape_id=47&shape_id=19&shape_id=50&shape_id=31&shape_id=7'
                  }
                >
                  <img
                    alt="produto Tópico"
                    src="https://www.cannect.life/static/media/topico.5e96ade7ac023eef72b7.png"
                  />
                </Link>
                <Link to={'/produtos/1?shape_id=29'}>
                  <img
                    alt="produto Flores"
                    src="https://www.cannect.life/static/media/flores.f120c4715b75a0c227ee.png"
                  />
                </Link>
              </Flex>
            </Section>

            <Section id="section-process">
              <H2 style={{ marginBottom: '42px' }}>
                <span>Cuidamos de você</span> em <span>todo processo:</span>
              </H2>
              <Flex
                style={{
                  gap: '30px',
                  transition: 'color 0.3s ease 0s',
                  flexDirection: 'row',
                  marginBottom: '20px',
                  width: '100%',
                  paddingBottom: '12px',
                  overflowX: 'auto',
                  color: 'rgba(0, 0, 0, 0)',
                }}
              >
                <Flex
                  style={{
                    padding: '22px 14px',
                    borderRadius: '10px',
                    gap: '32px',
                    width: '312px',
                    minWidth: '312px',
                    height: '367px',
                    backgroundColor: 'rgb(238, 246, 254)',
                    flexDirection: 'column',
                  }}
                >
                  <img
                    alt="receita médica icone"
                    src="https://www.cannect.life/static/media/Receipt.7682adb6fe89280c2c89d140b23005ab.svg"
                  />
                  <H3>Receita médica</H3>
                  <Paragraph>
                    O primeiro passo é possuir sua receita médica e você pode contar com a
                    cannect para{' '}
                    <Link
                      to={'/profissionais-parceiros-cannabis-medicinal'}
                      rel="noreferrer"
                      target="_self"
                      style={{ color: 'rgb(69, 121, 255)' }}
                    >
                      encontrar um profissional qualificado
                    </Link>{' '}
                    ou trazê-la de um médico de sua preferência.
                  </Paragraph>
                </Flex>
                <Flex
                  style={{
                    padding: '22px 14px',
                    borderRadius: '10px',
                    gap: '32px',
                    width: '312px',
                    minWidth: '312px',
                    height: '367px',
                    backgroundColor: 'rgb(238, 246, 254)',
                    flexDirection: 'column',
                  }}
                >
                  <img
                    alt="primeiros socorros icone"
                    src="https://www.cannect.life/static/media/FirstAidKit.3598053e2c84e9793154979f727f011c.svg"
                  />
                  <H3>Seu tratamento</H3>
                  <Paragraph>
                    Já tem uma receita?{' '}
                    <a
                      href="https://www.cannect.life/produtos/1?translated_name="
                      rel="noreferrer"
                      style={{ color: 'rgb(69, 121, 255)' }}
                    >
                      Encontre o produto prescrito pelo seu médico
                    </a>
                    , adicione no carrinho e nos envie a receita e documento. Te ajudaremos em
                    todo o processo.
                  </Paragraph>
                </Flex>
                <Flex
                  style={{
                    padding: '22px 14px',
                    borderRadius: '10px',
                    gap: '32px',
                    width: '312px',
                    minWidth: '312px',
                    height: '367px',
                    backgroundColor: 'rgb(238, 246, 254)',
                    flexDirection: 'column',
                  }}
                >
                  <img
                    alt="check quadrado icone"
                    src="https://www.cannect.life/static/media/CheckSquareOffset.71478b4c6221b0bdb18f73c83d65c17f.svg"
                  />
                  <h3
                    className="sc-kiQcgH hnGMen"
                    style={{
                      fontSize: '20px',

                      color: 'rgb(61, 61, 61)',
                    }}
                  >
                    Autorização da ANVISA
                  </h3>
                  <Paragraph className="sc-hBLBPu cobcGQ" style={{ fontWeight: 400 }}>
                    Caso sua receita seja simples (branca) uma autorização da ANVISA será
                    necessária para que seu produto seja liberado em solo brasileiro, aqui você
                    encontra{' '}
                    <Link
                      to={'https://www.youtube.com/watch?v=cA9OQbNffME'}
                      rel="noreferrer"
                      style={{ color: 'rgb(69, 121, 255)' }}
                      target="_blank"
                    >
                      instruções de como obtê-la.
                    </Link>
                  </Paragraph>
                </Flex>
                <Flex
                  style={{
                    padding: '22px 14px',
                    borderRadius: '10px',
                    gap: '32px',
                    width: '312px',
                    minWidth: '312px',
                    height: '367px',
                    backgroundColor: 'rgb(238, 246, 254)',
                    flexDirection: 'column',
                  }}
                >
                  <img
                    alt="hear beating icone"
                    src="https://www.cannect.life/static/media/Heartbeat.2095bfd7f9b03e664c02e424fc689807.svg"
                  />
                  <H3 className="sc-kiQcgH hnGMen">Acompanhamento</H3>
                  <Paragraph>
                    Após iniciar seu tratamento, você pode receber acompanhamento de uma equipe
                    de enfermagem especializada através do{' '}
                    <Link to={'/cuida'} rel="noreferrer" style={{ color: 'rgb(69, 121, 255)' }}>
                      cannect cuida
                    </Link>
                    , preparada para tirar suas dúvidas e fornecer apoio assistencial.
                  </Paragraph>
                </Flex>
              </Flex>
              <Flex style={{ margin: '30px 0px 0px' }}>
                <h1
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: '18px',
                    fontWeight: 400,
                    color: 'rgb(61, 61, 61)',
                  }}
                >
                  Quer saber mais? Mande uma mensagem para alguém do
                  <Link
                    to={'https://whts.co/Cannect'}
                    rel="noreferrer"
                    target="_blank"
                    style={{ color: 'rgb(69, 121, 255)', marginLeft: '4px' }}
                  >
                    time cannect.
                  </Link>
                </h1>
              </Flex>
            </Section>

            <Section id="section-tabu">
              <Flex style={{ flexDirection: 'column' }}>
                <H2 style={{ color: 'rgb(33, 151, 110)', marginBottom: '64px' }}>
                  Quebre o tabu sobre Cannabis
                </H2>
                <H3>
                  O que é <span>cannabis medicinal? </span>
                </H3>
                 
                <Paragraph>
                  A cannabis possui mais de 120 canabinoides – elementos que fazem parte de sua
                  composição – encontrados até o momento. Para o tratamento medicinal, os
                  componentes da cannabis, sobretudo o CDB, podem ser usados no tratamento de
                  algumas doenças crônicas e neurológicas específicas, como: epilepsia, autismo,
                  Alzheimer, dor crônica, Parkinson, insônia, entre outras.
                </Paragraph>
                 
                <H3>
                  Como a <span>cannabis medicinal age no nosso corpo? </span>
                </H3>
                 
                <Paragraph>
                  Os produtos de uso medicinal costumam utilizar dois componentes específicos: a
                  tetra-hidrocanabinol (THC) e o canabidiol (CDB), os dois canabinoides mais
                  abundantes e mais pesquisados até o momento. <br />
                  <br /> O THC e o CDB interagem com um sistema sinalizador vital do nosso
                  organismo, denominado sistema endocanabinoide, responsável por regular uma
                  série de funções vitais, como: dor, apetite, humor, memória, sono, ciclos
                  vitais das células e respostas imunológicas.
                  <br />
                </Paragraph>
                <Link
                  to={'/blog'}
                  style={{
                    transition: 'all 0.3s ease 0s',
                    marginTop: '28px',
                    fontSize: '20px',
                    textAlign: 'start',
                    color: 'rgb(69, 121, 255)',
                  }}
                >
                  {'continue lendo sobre a cannabis medicinal >'}
                </Link>
                <Flex
                  style={{
                    gap: '20px',
                    WebkitBoxAlign: 'center',
                    alignItems: 'center',
                    marginTop: '64px',
                    textDecoration: 'none',
                  }}
                >
                  <Button
                    style={{
                      gap: '0.5rem',
                      padding: '1rem',
                      background: 'rgb(17, 88, 80)',
                      transition: 'transform 0.2s ease 0s',
                      height: '48px',
                      borderRadius: '5px',
                      backgroundColor: 'rgb(240, 120, 10)',
                      width: '252px',
                    }}
                  >
                    <Paragraph style={{ fontSize: '19px', color: 'white', fontWeight: 600 }}>
                      Agende sua consulta
                    </Paragraph>
                  </Button>
                  <Button
                    style={{
                      gap: '0.5rem',
                      padding: '1rem',
                      transition: 'transform 0.2s ease 0s',
                      cursor: 'pointer',
                      color: 'rgb(17, 88, 80)',
                      height: '48px',
                      borderRadius: '5px',
                      border: '2px solid rgb(33, 151, 110)',
                      background: 'white',
                      width: '252px',
                    }}
                  >
                    <Paragraph style={{ fontSize: '19px', fontWeight: 600 }}>
                      Inicie seu tratamento
                    </Paragraph>
                  </Button>
                </Flex>
              </Flex>
              <Flex style={{ flexDirection: 'column' }}>
                <Flex
                  style={{
                    WebkitBoxAlign: 'center',
                    alignItems: 'center',
                    WebkitBoxPack: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    marginLeft: '30px',
                  }}
                >
                  <img
                    alt="atleta subindo escadas"
                    src="https://www.cannect.life/static/media/info-banner-image.194c0052dd5a3c7c928f.webp"
                  />
                </Flex>
              </Flex>
            </Section>

            <Section id="section-real-history">
              <H3 style={{ fontSize: '40px', fontWeight: 400, marginBottom: '42px' }}>
                <span>Histórias reais</span> de quem <span style={{}}>confia na Cannect</span>
              </H3>
              <Flex
                style={{
                  gap: '30px',
                  transition: 'color 0.3s ease 0s',
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: '20px',
                  width: '100%',
                  paddingBottom: '12px',
                  overflowX: 'auto',
                  color: 'rgba(0, 0, 0, 0)',
                }}
              >
                <Flex
                  style={{
                    gap: '20px',
                    width: '252px',
                    minWidth: '252px',
                    height: '518px',
                    flexDirection: 'column',
                    WebkitBoxAlign: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    alt="Profile picture"
                    src="https://strapi.cannect.life/uploads/julia_38cba9a83c.jpeg"
                    style={{
                      borderRadius: '20px',
                      height: '275px',
                      width: '252px',
                      minHeight: '275px',
                      minWidth: '252px',
                      maxHeight: '275px',
                      maxWidth: '252px',
                      objectFit: 'cover',
                    }}
                  />
                  <H3
                    style={{
                      gap: '10px',
                      display: 'flex',
                      WebkitBoxAlign: 'center',
                      alignItems: 'center',
                      fontSize: '19px',
                      fontWeight: 400,
                    }}
                  >
                    Júlia Pires{' '}
                    <svg
                      height="1em"
                      width="1em"
                      color="#21976E"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        fontSize: '26px',
                        cursor: 'pointer',
                        color: 'rgb(33, 151, 110)',
                      }}
                    >
                      <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                    </svg>
                  </H3>
                  <Paragraph
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '7',
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    Júlia Pires, de 33 anos, sofria com ansiedade e insônia há um tempo. Com o
                    início da pandemia de COVID-19, as coisas pioraram ainda mais. Mesmo fazendo
                    terapia há dois anos, ela ainda teve crises de ansiedade no início do ano
                    passado. Foi então que a sua psiquiatra recomendou a Cannect. Pires t ...
                  </Paragraph>
                </Flex>
                <Flex
                  style={{
                    gap: '20px',
                    width: '252px',
                    minWidth: '252px',
                    height: '518px',
                    flexDirection: 'column',
                    WebkitBoxAlign: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    alt="Profile picture"
                    src="https://strapi.cannect.life//uploads/elaine_e_seu_filho_7969358314.jpeg"
                    style={{
                      borderRadius: '20px',
                      height: '275px',
                      width: '252px',
                      minHeight: '275px',
                      minWidth: '252px',
                      maxHeight: '275px',
                      maxWidth: '252px',
                      objectFit: 'cover',
                    }}
                  />
                  <H3
                    style={{
                      gap: '10px',
                      display: 'flex',
                      WebkitBoxAlign: 'center',
                      alignItems: 'center',
                      fontSize: '19px',
                      fontWeight: 400,
                    }}
                  >
                    Elaine Hansen{' '}
                    <svg
                      height="1em"
                      width="1em"
                      color="#21976E"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        fontSize: '26px',
                        cursor: 'pointer',
                        color: 'rgb(33, 151, 110)',
                      }}
                    >
                      <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                    </svg>
                  </H3>
                  <Paragraph
                    style={{
                      overflow: 'hidden',
                      fontSize: '18px',
                      fontWeight: 500,
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '7',
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    Elaine Hansen, de 46 anos, tinha dores constantes, que afetavam
                    principalmente o estômago. Ela não conseguia dormir direito, tomava uma
                    grande quantidade de remédios e não tinha qualidade de vida. Foi só depois
                    do tratamento com Cannabis Medicinal que tudo começou a mudar. Em poucos
                    meses, as d ...
                  </Paragraph>
                </Flex>
                <Flex
                  style={{
                    gap: '20px',
                    width: '252px',
                    minWidth: '252px',
                    height: '518px',
                    flexDirection: 'column',
                    WebkitBoxAlign: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    alt="Profile picture"
                    src="https://strapi.cannect.life//uploads/Soraia_Lopes_3b05849076.jpeg"
                    style={{
                      borderRadius: '20px',
                      height: '275px',
                      width: '252px',
                      minHeight: '275px',
                      minWidth: '252px',
                      maxHeight: '275px',
                      maxWidth: '252px',
                      objectFit: 'cover',
                    }}
                  />
                  <H3
                    style={{
                      gap: '10px',
                      display: 'flex',
                      WebkitBoxAlign: 'center',
                      alignItems: 'center',
                      fontSize: '19px',
                      fontWeight: 400,
                    }}
                  >
                    Soraia Lopes{' '}
                    <svg
                      height="1em"
                      width="1em"
                      color="#21976E"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        fontSize: '26px',
                        cursor: 'pointer',
                        color: 'rgb(33, 151, 110)',
                      }}
                    >
                      <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                    </svg>
                  </H3>
                  <Paragraph
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '7',
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    Soraia Lopes, de 52 anos, já apostava na cannabis bem antes de utilizá-la.
                    Achar a Cannect só foi um facilitador para que ela finalmente fizesse o uso
                    da terapia natural para tratar a fibromialgia.Ela passou a utilizar o óleo
                    em fevereiro. Neste curto período, além das dores, a cannabis auxiliou na
                    ...
                  </Paragraph>
                </Flex>
                <Flex
                  style={{
                    gap: '20px',
                    width: '252px',
                    minWidth: '252px',
                    height: '518px',
                    flexDirection: 'column',
                    WebkitBoxAlign: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    alt="Profile picture"
                    src="https://strapi.cannect.life//uploads/Luciana_Falcao_d96695cbdc.jpg"
                    style={{
                      borderRadius: '20px',
                      height: '275px',
                      width: '252px',
                      minHeight: '275px',
                      minWidth: '252px',
                      maxHeight: '275px',
                      maxWidth: '252px',
                      objectFit: 'cover',
                    }}
                  />
                  <H3
                    style={{
                      gap: '10px',
                      display: 'flex',
                      WebkitBoxAlign: 'center',
                      alignItems: 'center',
                      fontSize: '19px',
                      fontWeight: 400,
                    }}
                  >
                    Luciana Falcão{' '}
                    <svg
                      height="1em"
                      width="1em"
                      color="#21976E"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        fontSize: '26px',
                        cursor: 'pointer',
                        color: 'rgb(33, 151, 110)',
                      }}
                    >
                      <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                    </svg>
                  </H3>
                  <Paragraph
                    className="sc-lizKOf zNhvC"
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '7',
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    Luciana Falcão resolveu estudar um pouquinho mais a fundo os efeitos da
                    cannabis para degeneração da mácula e artrose, condições que atingiram a sua
                    mãe, Ila. Descobrir a Cannect para mim foi um “achado”, porque tivemos o
                    atendimento da médica, a autorização da Anvisa e importação, tudo em um s
                    ...
                  </Paragraph>
                </Flex>
                <Flex
                  style={{
                    gap: '20px',
                    width: '252px',
                    minWidth: '252px',
                    height: '518px',
                    flexDirection: 'column',
                    WebkitBoxAlign: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    alt="Profile picture"
                    src="https://strapi.cannect.life//uploads/Whats_App_Image_2022_04_19_at_18_05_35_1a4e19322a.jpeg"
                    style={{
                      borderRadius: '20px',
                      height: '275px',
                      width: '252px',
                      minHeight: '275px',
                      minWidth: '252px',
                      maxHeight: '275px',
                      maxWidth: '252px',
                      objectFit: 'cover',
                    }}
                  />
                  <H3
                    style={{
                      gap: '10px',
                      display: 'flex',
                      WebkitBoxAlign: 'center',
                      alignItems: 'center',
                      fontSize: '19px',
                      fontWeight: 400,
                    }}
                  >
                    Bruno Castanheira{' '}
                    <svg
                      height="1em"
                      width="1em"
                      color="#21976E"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        fontSize: '26px',
                        cursor: 'pointer',
                        color: 'rgb(33, 151, 110)',
                      }}
                    >
                      <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                    </svg>
                  </H3>
                  <Paragraph
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '7',
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    Bruno Castanheira, de 31 anos, ficou bem interessado na cannabis depois de
                    descobrir que ela poderia ser útil para Transtorno do déficit de atenção com
                    hiperatividade (TDAH). Ele já havia tentado vários outros tipos de
                    tratamento, mas sem sucesso. “Nunca senti uma melhora significativa no ...
                  </Paragraph>
                </Flex>
              </Flex>
              <Link
                to={'/comunidade'}
                style={{
                  transition: 'all 0.3s ease 0s',
                  marginTop: '28px',
                  fontSize: '20px',
                  color: 'rgb(69, 121, 255)',
                }}
              >
                {' '}
                Leia outras histórias
              </Link>
            </Section>

            <Section id="section-parceiros">
              <Flex
                style={{
                  transition: 'color 0.3s ease 0s',
                  flexDirection: 'column',
                  width: '100%',
                  paddingBottom: '12px',
                  overflowX: 'auto',
                  color: 'rgba(0, 0, 0, 0)',
                }}
              >
                <H3 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '84px' }}>
                  Parceiros Cannect
                </H3>
                <img
                  alt="parceiros cannect logos"
                  src="https://www.cannect.life/static/media/logos-parceiros.d83a56f2a371f01f5bd4.png"
                  style={{
                    transition: 'all 0.3s ease 0s',
                    minWidth: '700px',
                    filter: 'grayscale(100%)',
                  }}
                />
                <Link
                  to={'/marcas'}
                  style={{
                    marginTop: '82px',
                    fontSize: '20px',
                    alignSelf: 'flex-end',
                    color: 'rgb(69, 121, 255)',
                  }}
                >
                  {' '}
                  Veja todos os parceiros
                </Link>
              </Flex>
            </Section>

            <Section id="section-novidades">
              <H3 style={{ fontSize: '40px', fontWeight: 400, marginBottom: '42px' }}>
                Leia aqui as <span>novidades da</span>{' '}
                <span style={{ color: 'rgb(33, 151, 110)' }}>#revoluçãoverde</span>
              </H3>
              <Flex
                style={{
                  gap: '20px',
                  transition: 'color 0.3s ease 0s',
                  flexDirection: 'row',
                  marginBottom: '20px',
                  width: '100%',
                  paddingBottom: '12px',
                  overflowX: 'auto',
                  color: 'rgba(0, 0, 0, 0)',
                }}
              >
                <Link to={'/blog/saude-e-bem-estar/canabidiol-cbd-o-que-e'}>
                  <Flex
                    style={{
                      gap: '20px',
                      borderRadius: '20px',
                      width: '100%',
                      height: '518px',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      backgroundColor: 'rgb(254, 254, 254)',
                      zIndex: 2,
                    }}
                  >
                    <img
                      src="https://strapi.cannect.life/uploads/thumbnail_cbd_oil_5358403_640_165e4e85bd.jpg"
                      style={{
                        borderRadius: '20px 20px 0px 0px',
                        width: '432px',
                        minWidth: '432px',
                        maxWidth: '432px',
                        height: '283px',
                        minHeight: '283px',
                        maxHeight: '283px',
                        objectFit: 'cover',
                      }}
                    />
                    <H3
                      style={{
                        padding: '0px 18px',
                        gap: '10px',
                        display: 'flex',
                        WebkitBoxAlign: 'center',
                        alignItems: 'center',
                        fontWeight: 700,
                      }}
                    >
                      Canabidiol (CBD): o que é e para que serve?
                    </H3>
                    <Paragraph
                      style={{
                        padding: '0px 18px',
                        overflow: 'hidden',
                        fontSize: '14px',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '4',
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {' '}
                      Imagem: Pixabay &nbsp; Quando pensamos em cannabis medicinal, é bem
                      provável que também pensemos no&nbsp; canabidiol (CBD) , que é o
                      componente da cannabis sativa mais conhecido por suas propriedades
                      terapêuticas. É classificado como um canabinoide maior, pois é encontrado
                      em maior quantidade na composição da planta, assim como o&nbsp;
                      tetrahidrocanabinol (THC) . &nbsp; Um dos diferenciais do CBD para outros
                      fármacos convencionais, como comprimidos antidepressivos, é a quantidade
                      bem menor de efeitos colaterais. Por se tratar de um tratamento natural,
                      sua “transformação” para virar remédio não depende de sintéticos,
                      portanto, a pureza do tratamento é ligada a funções naturais do organismo
                      que serão explicadas abaixo. &nbsp; Em suma, o canabidiol apresenta
                      efeitos terapêuticos que contam com diversas evidências científicas que
                      estão aos poucos provando sua eficácia. O chamado&nbsp; efeito entourage ,
                      que é a interação com outros compostos da cannabis, é uma forma de
                      potencializar os efeitos e ter resultados mais velozes. Dessa forma, os
                      produtos à base de cannabis podem ser divididos em três categorias :&nbsp;
                      Espectro Completo (que possuem todos os canabinoides),&nbsp; Espectro
                      Amplo (todos os componentes menos o THC) e as versões de&nbsp; CBD isolado
                      .&nbsp; &nbsp; Para que serve o canabidiol? &nbsp; O uso do canabidiol vem
                      sendo embasado por diversos estudos nacionais e internacionais.
                      Diferentemente do THC que em altas quantidades gera efeitos psicoativos, o
                      CBD não desempenha esse papel . Porém, mais pesquisas são necessárias para
                      afirmar quais dosagens são as melhores para tratar cada patologia.&nbsp;
                      &nbsp; Principais características &nbsp; Segundo a&nbsp; Fiocruz , o CBD
                      tem efeitos anticonvulsivantes, ansiolíticos, antioxidantes e
                      anti-inflamatórios. Por outro lado, o THC que pode intensificar o
                      potencial terapêutico do canabidiol, possui ação analgésica e anti-náusea,
                      e estimula o apetite.&nbsp; &nbsp; A interação com o corpo é feita através
                      do Sistema Endocanabinoide (SEC), que regula a homeostase e mantém o corpo
                      em equilíbrio. Ao detectar doenças, por exemplo, é este sistema que
                      comunica o cérebro para retomar as funções do organismo. E dessa forma, as
                      propriedades do canabidiol aceleram a capacidade do SEC de se
                      autoproteger. &nbsp; Para quais tratamentos o canabidiol é indicado?
                      &nbsp; O tratamento com cannabis medicinal poderia atingir quase 7 milhões
                      de brasileiros, de acordo com a&nbsp; Kaya Mind , empresa de dados sobre
                      cannabis medicinal. Isso aconteceria porque diversas condições de saúde
                      podem ser tratadas com a terapêutica, e o CBD seria útil para praticamente
                      todas.&nbsp; Pesquisas mais avançadas estão na neurologia, em doenças como
                      epilepsia, Alzheimer, Parkinson e esclerose múltipla.&nbsp; &nbsp; Para a
                      saúde mental, é uma opção natural para ansiedade, depressão e síndrome do
                      estresse pós-traumático. &nbsp; De acordo com um&nbsp; estudo , o CBD
                      combinado THC pode reduzir os sintomas de náusea em pacientes com câncer.
                      Os pesquisadores avaliaram a aplicação das substâncias em alguns pacientes
                      com essas condições: um grupo recebeu cápsulas com canabinoides e outro um
                      placebo. Uma resposta completa aos sintomas foi percebida em 24% dos
                      pacientes que receberam os derivados de cannabis.&nbsp; &nbsp; Onde
                      comprar o canabidiol? &nbsp; Produtos à base de cannabis são permitidos no
                      Brasil desde 2015, porém, a fabricação só é autorizada para alguns
                      medicamentos específicos. Dessa forma, a Anvisa controla todo o processo
                      de&nbsp; importação por meio da Resolução da Diretoria Colegiada (RDC) nº
                      660, de 2022, e as compras dessa categoria, que são a maioria no país,
                      devem seguir minuciosamente a legislação. &nbsp; Sendo assim, para comprar
                      o óleo de canabidiol, por exemplo, será necessário passar por uma consulta
                      com um profissional de saúde legalmente habilitado no conselho regional de
                      sua profissão. Depois de sair com a prescrição, o paciente deverá
                      solicitar a autorização para importar canabinoides. Isso pode ser feito
                      pela&nbsp; Plataforma de Serviços do Governo Federal . &nbsp; Clique aqui
                      para saber como solicitar a autorização da Anvisa &nbsp; Com todas as
                      informações certificadas, você poderá importar os produtos ou adquiri-los
                      em farmácias ou associações de cannabis medicinal. &nbsp; Conheça o
                      ecossistema da Cannect &nbsp; A&nbsp; Cannect é uma empresa que facilita o
                      processo de importação!&nbsp; &nbsp; Possuímos o maior&nbsp; portfólio de
                      produtos à base de cannabis da América Latina, com diferentes
                      concentrações de CBD e outros componentes, a depender do caso. &nbsp; Com
                      os documentos em mãos, os pacientes poderão ter acesso à terapêutica em
                      até&nbsp; 25 dias contados a partir da confirmação do pagamento .
                      Certificamos se a documentação está correta e dentro dos padrões exigidos
                      pela Anvisa e levamos os produtos até a casa de cada solicitante.&nbsp;
                      &nbsp; Além disso, conectamos os pacientes ao profissionais de saúde, que
                      serão responsáveis pelo início do tratamento, como citado acima. Acesse
                      nossa plataforma de &nbsp; Agendamento de Consultas &nbsp; e defina seu
                      atendimento filtrando por patologia, especialidade atendida e preço.{' '}
                    </Paragraph>
                  </Flex>
                </Link>
                <Link
                  to={'/blog/novidades/site-da-cannalize-esta-de-cara-nova-confira-as-mudancas'}
                >
                  <Flex
                    style={{
                      gap: '20px',
                      borderRadius: '20px',
                      width: '100%',
                      height: '518px',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      backgroundColor: 'rgb(254, 254, 254)',
                      zIndex: 2,
                    }}
                  >
                    <img
                      src="https://strapi.cannect.life/uploads/thumbnail_Novo_site_cannalize_foto_a23b597ca0.png"
                      style={{
                        borderRadius: '20px 20px 0px 0px',
                        width: '432px',
                        minWidth: '432px',
                        maxWidth: '432px',
                        height: '283px',
                        minHeight: '283px',
                        maxHeight: '283px',
                        objectFit: 'cover',
                      }}
                    />
                    <H3
                      className="sc-kjUoyC bFVnIh"
                      style={{
                        padding: '0px 18px',
                        gap: '10px',
                        display: 'flex',
                        WebkitBoxAlign: 'center',
                        alignItems: 'center',
                        fontWeight: 700,
                      }}
                    >
                      Site da Cannalize está de cara nova, confira as principais mudanças
                    </H3>
                    <Paragraph
                      style={{
                        padding: '0px 18px',
                        overflow: 'hidden',
                        fontSize: '14px',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '4',
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {' '}
                      Imagem: Cannalize &nbsp; O tratamento com cannabis está crescendo muito no
                      Brasil e no mundo. Além da necessidade de educar este mercado, é muito
                      importante informar a população de forma correta e segura. &nbsp; Por
                      isso, a&nbsp; Cannalize , plataforma de notícias sobre cannabis medicinal,
                      foi criada em março de 2020, pelo jornalista Nathan Candido.&nbsp; &nbsp;
                      Quase dois anos depois, o portal passou a fazer parte do&nbsp; ecossistema
                      da Cannect e colabora com nosso trabalho noticiando sobre estudos
                      científicos, patologias que podem ser tratadas, legislações e relatos de
                      pessoas que fazem o tratamento. &nbsp; O site acabou de passar mudanças em
                      sua estrutura, com objetivo de atrair mais leitores ao conversar com
                      públicos diferentes. Tais melhorias começam pelo cabeçalho, que agora está
                      com as verticais (ícones de busca) mais organizadas.&nbsp; &nbsp; Dessa
                      forma, será possível procurar por assuntos específicos como notícias
                      recentes, doenças, linhas de tratamentos e formas de&nbsp; agendar uma
                      consulta com a Cannect.&nbsp; &nbsp; Cannateca &nbsp; A Cannalize conta
                      com uma parte específica para quem quer informações mais completas e
                      contextualizadas sobre algum assunto. Trata-se da “ Cannateca ”, que é
                      costumeiramente abastecida e-books, como os sobre&nbsp; ansiedade e&nbsp;
                      depressão , lançados recentemente.&nbsp; &nbsp; O espaço também conta com
                      vídeos e entrevistas com profissionais de saúde e representantes de
                      instituições ou empresas de cannabis medicinal.&nbsp; &nbsp; Colunas
                      &nbsp; Mais uma mudança de destaque é a divisão das&nbsp; colunas , que
                      agora está visível no rodapé da página. Além das que já existiam, entraram
                      algumas inéditas como a coluna da Cannect que terá textos mensais sobre as
                      ferramentas da empresa e soluções para quem quer começar um
                      tratamento.&nbsp; Conheça mais sobre o&nbsp; site da Cannalize e saiba o
                      que está acontecendo no universo da cannabis medicinal!&nbsp;{' '}
                    </Paragraph>
                  </Flex>
                </Link>
                <Link to={'/blog/novidades/inscricoes-do-premio-cannect-prorrogadas'}>
                  <Flex
                    style={{
                      gap: '20px',
                      borderRadius: '20px',
                      width: '100%',
                      height: '518px',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      backgroundColor: 'rgb(254, 254, 254)',
                      zIndex: 2,
                    }}
                  >
                    <img
                      src="https://strapi.cannect.life/uploads/large_warning_sign4_a8289969ef.jpg"
                      style={{
                        borderRadius: '20px 20px 0px 0px',
                        width: '432px',
                        minWidth: '432px',
                        maxWidth: '432px',
                        height: '283px',
                        minHeight: '283px',
                        maxHeight: '283px',
                        objectFit: 'cover',
                      }}
                    />
                    <H3
                      style={{
                        padding: '0px 18px',
                        gap: '10px',
                        display: 'flex',
                        WebkitBoxAlign: 'center',
                        alignItems: 'center',
                        fontWeight: 700,
                      }}
                    >
                      ATENÇÃO: Inscrições do Prêmio Cannect são prorrogadas!
                    </H3>
                    <Paragraph
                      className="sc-icDaWZ gLDsSB"
                      style={{
                        padding: '0px 18px',
                        overflow: 'hidden',
                        fontSize: '14px',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '4',
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {' '}
                      A maior plataforma de cannabis medicinal da América Latina anunciou, em
                      maio, a primeira edição do&nbsp; Prêmio Cannect de Incentivo à Pesquisa .
                      Para que mais profissionais de saúde e pesquisadores tenham oportunidade
                      de impulsionar seus trabalhos,&nbsp; as inscrições foram prorrogadas até
                      29 de setembro ! &nbsp; Com exceção da mudança na data, as demais regras
                      permanecem as mesmas, especialmente nos critérios de avaliação. &nbsp;
                      Todos os projetos devem ser relacionados com cannabis medicinal ou Sistema
                      Endocanabinoide, e só serão aceitas pesquisas originais, ou seja, que
                      ainda não tenham sido publicadas.Trabalhos desenvolvidos nos nos últimos
                      24 meses também serão aceitos. &nbsp; Para inscrever seu projeto
                      científico, os participantes deverão enviar seus dados pessoais e submeter
                      as informações da pesquisa.&nbsp; Clique aqui para fazer sua
                      inscrição.&nbsp; &nbsp; A taxa de inscrição é de R$ 50,00. &nbsp;
                      Categorias do Prêmio &nbsp; O Prêmio Cannect contará com duas
                      categorias:&nbsp; &nbsp; Casos Clínicos : que engloba relatos de casos,
                      séries de casos, coortes, casos-controle e outros. &nbsp; Ciências
                      Aplicadas à Saúde : para estudos pré-clínicos, in vitro, análises
                      populacionais-demográficas e outras pesquisas de níveis de evidência
                      semelhantes. &nbsp; Independente da categorias, todos os trabalhos deverão
                      ser enviados exclusivamente pela página oficial, devendo seguir as normas
                      da ABNT (Associação Brasileira de Normas Técnicas) e nos formatos&nbsp;
                      “.doc”, “.docx” e “.pdf”. Será possível submeter mais de um trabalho,
                      porém, enviados separadamente. &nbsp; Etapas &nbsp; Na primeira fase do
                      concurso, a Banca Avaliadora aprovará cinco trabalhos de cada categoria
                      para uma apresentação presencial. &nbsp; Serão considerados os critérios:
                      originalidade, relevância, resultados e metodologias, coerência e coesão.
                      &nbsp; Apresentação &nbsp; Os pesquisadores finalistas terão dez minutos
                      para apresentar seus resultados, e através disso, será escolhido um
                      vencedor para cada categoria. Estes receberão um prêmio em dinheiro, no
                      valor de R$ 3000,00. Além disso, os trabalhos de mais destaque também
                      poderão ser publicados em uma revista científica de grande destaque com
                      supervisão da Cannect.&nbsp; &nbsp; Confira o&nbsp; edital oficial para
                      entender mais sobre as fases do concurso, bem como premiação,
                      responsabilidades e deveres do candidato.&nbsp; &nbsp; Se você gostaria de
                      contribuir&nbsp; de alguma forma com o avanço das pesquisas sobre cannabis
                      medicinal, não perca tempo e envie sua proposta!{' '}
                    </Paragraph>
                  </Flex>
                </Link>
              </Flex>
              <Button
                style={{
                  borderRadius: '5px',
                  background: 'rgb(61, 61, 61)',
                  transition: 'all 0.3s ease 0s',
                  width: '252px',
                  height: '40px',
                  paddingTop: '4px',
                  marginTop: '35px',
                  zIndex: 2,
                  alignSelf: 'flex-end',
                  fontSize: '18px',
                  fontWeight: 400,
                  color: 'rgb(250, 250, 250)',
                }}
              >
                Veja mais
              </Button>
            </Section>
          </PageContent>
          <Footer />
        </PageWrapper>
      </Root>
    </>
  )
}

export default Home
