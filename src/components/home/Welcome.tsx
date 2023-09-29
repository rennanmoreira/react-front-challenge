import {
  BannerImage,
  BannerSection,
  ButtonsContainer,
  Flex,
  H1,
  Paragraph,
  Section,
  TextSection,
} from '../styled.css.ts'
import Button from '../Button'
import Tilt from 'react-parallax-tilt'

const Welcome = () => {
  return (
    <>
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
            <H1>
              Inicie <span>seu tratamento</span> <br /> com{' '}
              <span style={{ color: 'rgb(33, 151, 110)' }}>cannabis medicinal</span>
            </H1>
            <Paragraph style={{ maxWidth: '600px' }}>
              A Cannect pode te ajudar em seu caminho para uma vida melhor. Cuidamos de você em
              todo o processo, faça parte da revolução verde!
            </Paragraph>
          </Flex>
          <ButtonsContainer>
            <Button title={'Agende sua consulta'} />
            <Button
              title={'Inicie seu tratamento'}
              variant="secondary"
              className="hide-for-mobile"
            />
          </ButtonsContainer>
        </TextSection>
        <BannerSection>
          <Tilt tiltReverse={true}>
            <BannerImage
              className="hide-for-tablet"
              src="https://www.cannect.life/static/media/banner-image-1.c2bdae1e8783e153b00f.webp"
              alt="oleo cannabis medicinal"
              style={{ marginTop: '-34px' }}
            />
          </Tilt>
          <Tilt tiltReverse={true}>
            <BannerImage
              className="hide-for-desktop"
              src="https://www.cannect.life/static/media/banner-image-2.69443d255f1ca027ad58.webp"
              alt="gummies com cbd de cannabis medicinal"
              style={{ marginLeft: '20px' }}
            />
          </Tilt>
          <Tilt tiltReverse={true}>
            <BannerImage
              className="show-for-desktop-and-down hide-for-tablet-plus-and-down"
              src="https://www.cannect.life/static/media/banner-image-medium.d5777403240a0ee77cb8.png"
              alt="oleo cannabis medicinal"
              style={{ marginTop: '-35px' }}
            />
          </Tilt>
        </BannerSection>
      </Section>
    </>
  )
}

export default Welcome
