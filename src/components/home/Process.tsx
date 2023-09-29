import { Flex, H2, Section } from '../styled.css.js'
import { HealthCardList } from '../HealthCardList.tsx'
import { Link } from 'react-router-dom'

const Process = () => {
  return (
    <>
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
          }}
        >
          <HealthCardList />
        </Flex>
        <Flex style={{ margin: '30px 0px 0px' }} className="hide-for-tablet-and-down">
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
    </>
  )
}

export default Process
