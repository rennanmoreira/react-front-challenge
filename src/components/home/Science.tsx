import { Flex, H2, Section } from '../styled.css.js'
import ProductCards from '../ProductCardList.tsx'

const Science = () => {
  return (
    <>
      <Section id="section-science">
        <H2>
          Encontre{' '}
          <span style={{ color: 'rgb(33, 151, 110)', fontWeight: '700' }}>
            ciência, saúde e bem-estar
          </span>
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
          <ProductCards />
        </Flex>
      </Section>
    </>
  )
}

export default Science
