import { Flex, H3, Section } from '../styled.css.js'
import { Link } from 'react-router-dom'

const Partners = () => {
  return (
    <>
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
          <H3>Parceiros Cannect</H3>
          <img
            alt="parceiros cannect logos"
            src="https://www.cannect.life/static/media/logos-parceiros.d83a56f2a371f01f5bd4.png"
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
    </>
  )
}

export default Partners
