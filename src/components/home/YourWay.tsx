import { Flex, H2, Section } from '../styled.css.js'
import Tilt from 'react-parallax-tilt'

const YourWay = () => {
  return (
    <>
      <Section id="section-way">
        <H2
          className="hide-for-tablet-and-down"
          style={{
            width: '100%',
            lineHeight: '155%',
            marginBottom: '45px',
          }}
        >
          <span>Seu caminho</span> para uma <span>vida melhor:</span>
        </H2>
        <Flex className="start-treatment hide-for-tablet-and-down">
          <Tilt tiltReverse={true}>
            <img
              alt="não tenho receita"
              src="https://www.cannect.life/static/media/nao-tenho-receita.9c7b86ff6dd86a16a7d7.png"
            />
          </Tilt>
          <Tilt tiltReverse={true}>
            <img
              alt="Receita Branca"
              src="https://www.cannect.life/static/media/receita-branca.96ba82ca0a81b75b0e99.png"
            />
          </Tilt>
          <Tilt tiltReverse={true}>
            <img
              alt="Receita especial"
              src="https://www.cannect.life/static/media/receita-especial.863307e14bad6e71f3c9.png"
            />
          </Tilt>
        </Flex>
        <div className=" show-for-tablet-and-down">
          <Flex className="start-treatment">
            <Tilt tiltReverse={true}>
              <img
                alt="não tenho receita"
                src="https://www.cannect.life/static/media/nao-tenho-receita-mobile.24b692f9c139ad419b3b.png"
              />
            </Tilt>
            <Tilt tiltReverse={true}>
              <img
                alt="Receita Branca"
                src="https://www.cannect.life/static/media/receita-branca-mobile.f8455d05cc8b93f31292.png"
              />
            </Tilt>
            <Tilt tiltReverse={true}>
              <img
                alt="Receita especial"
                src="https://www.cannect.life/static/media/receita-especial-mobile.a71a2b30080bd3bbf56f.png"
              />
            </Tilt>
          </Flex>
        </div>
      </Section>
    </>
  )
}

export default YourWay
