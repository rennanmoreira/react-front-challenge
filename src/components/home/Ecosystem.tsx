import { Flex, H2, Paragraph, Section } from '../styled.css.js'
import Button from '../Button.js'
import Tilt from 'react-parallax-tilt'

const Ecosystem = () => {
  return (
    <>
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
            <H2 className="bigger">
              Somos o <span>maior ecossistema de cannabis</span> da <span>América Latina</span>
            </H2>
            <Paragraph
              className="bigger"
              style={{ color: 'rgb(250, 250, 250)', paddingRight: '10px' }}
            >
              Conectamos centenas de pacientes, médicos, instituições de saúde, pesquisadores e
              fornecedores todas as semanas para facilitar o acesso à cannabis medicinal e
              educar para desmistificar o preconceito sobre seu uso.
            </Paragraph>
            <Button title="conheça mais" variant="tertiary" className="center-on-mobile" />
          </Flex>
          <Tilt tiltReverse={true}>
            <img
              className="hide-for-tablet-and-down"
              alt="about us logos"
              src="https://www.cannect.life/static/media/about-us-logos.d6f1eb10f2272cb0b230.png"
            />
          </Tilt>
        </Flex>
      </Section>
    </>
  )
}

export default Ecosystem
