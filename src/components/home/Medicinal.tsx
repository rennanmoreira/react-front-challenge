import { Column, CustomLink, Flex, H2, H3, Paragraph, Row, Section } from '../styled.css.js'
import Button from '../Button.js'
import Tilt from 'react-parallax-tilt'
import styled from 'styled-components'

export const BannerImage = styled.img`
  @media (max-width: 1259px) {
    max-width: 400px;
  }
  @media (max-width: 1100px) {
    max-width: 300px;
  }
`

const Medicinal = () => {
  return (
    <>
      <Section id="section-tabu">
        <Flex style={{ flexDirection: 'column', maxWidth: '100%' }}>
          <H2
            style={{
              color: 'rgb(33, 151, 110)',
              marginBottom: '64px',
              fontWeight: '600',
            }}
          >
            Quebre o tabu sobre Cannabis
          </H2>
          <H3>
            O que é <span>cannabis medicinal? </span>
          </H3>
           
          <Paragraph style={{ marginBottom: '10px' }}>
            A cannabis possui mais de 120 canabinoides – elementos que fazem parte de sua
            composição – encontrados até o momento. Para o tratamento medicinal, os componentes
            da cannabis, sobretudo o CDB, podem ser usados no tratamento de algumas doenças
            crônicas e neurológicas específicas, como: epilepsia, autismo, Alzheimer, dor
            crônica, Parkinson, insônia, entre outras.
          </Paragraph>
           
          <H3>
            Como a <span>cannabis medicinal age no nosso corpo? </span>
          </H3>
           
          <Paragraph style={{ marginBottom: '10px' }}>
            Os produtos de uso medicinal costumam utilizar dois componentes específicos: a
            tetra-hidrocanabinol (THC) e o canabidiol (CDB), os dois canabinoides mais
            abundantes e mais pesquisados até o momento. <br />
            <br /> O THC e o CDB interagem com um sistema sinalizador vital do nosso organismo,
            denominado sistema endocanabinoide, responsável por regular uma série de funções
            vitais, como: dor, apetite, humor, memória, sono, ciclos vitais das células e
            respostas imunológicas.
            <br />
          </Paragraph>
          <CustomLink
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
          </CustomLink>
          <Flex
            style={{
              gap: '20px',
              WebkitBoxAlign: 'center',
              alignItems: 'center',
              marginTop: '64px',
              textDecoration: 'none',
            }}
          >
            <Row className="center-for-mobile">
              <Column
                $sm="12"
                $sl="12"
                $md="6"
                $lg="12"
                $xl="6"
                className="center-for-mobile"
                style={{ padding: '10px 10px 0px 0px' }}
              >
                <Button title={'Agende sua consulta'} variant="quaternary" />
              </Column>
              <Column
                $sm="12"
                $sl="12"
                $md="6"
                $lg="12"
                $xl="6"
                className="center-for-mobile"
                style={{ padding: '10px 10px 0px 0px' }}
              >
                <Button title={'Inicie seu tratamento'} variant="secondary" />
              </Column>
            </Row>
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
            <Tilt tiltReverse={true} tiltMaxAngleX={6} tiltMaxAngleY={6}>
              <BannerImage
                className="hide-for-tablet-and-down"
                alt="atleta subindo escadas"
                src="https://www.cannect.life/static/media/info-banner-image.194c0052dd5a3c7c928f.webp"
              />
            </Tilt>
          </Flex>
        </Flex>
      </Section>
    </>
  )
}

export default Medicinal
