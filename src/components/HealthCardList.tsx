import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, H3, Paragraph } from './styled.css.ts'
import Tilt from 'react-parallax-tilt'

export const RootCard = styled(Flex)`
  padding: 22px 14px;
  border-radius: 10px;
  gap: 32px;
  width: 312px;
  min-width: 312px;
  height: 367px;
  background-color: rgb(238, 246, 254);
  flex-direction: column;

  a {
    color: rgb(69, 121, 255);
  }

  @media (max-width: 900px) {
    width: 216px;
    min-width: 216px;
    gap: 24px;

    p {
      font-size: 16px;
    }
  }
`

export const HealthCard = (props) => {
  return (
    <>
      <Tilt tiltReverse={true}>
        <RootCard>
          <img alt={props.alt} src={props.src} />
          <H3>{props.title}</H3>
          <Paragraph>{props.children}</Paragraph>
        </RootCard>
      </Tilt>
    </>
  )
}

export const HealthCardList = () => {
  return (
    <>
      {healthData.map(({ alt, src, title, content }, id) => {
        return (
          <HealthCard key={id} props={alt} src={src} title={title}>
            {content}
          </HealthCard>
        )
      })}
    </>
  )
}

const healthData = [
  {
    src: 'https://www.cannect.life/static/media/Receipt.7682adb6fe89280c2c89d140b23005ab.svg',
    alt: 'receita médica icone',
    title: 'Receita médica',
    content: (
      <>
        O primeiro passo é possuir sua receita médica e você pode contar com a cannect para{' '}
        <Link
          to={'/profissionais-parceiros-cannabis-medicinal'}
          rel="noreferrer"
          target="_self"
        >
          encontrar um profissional qualificado
        </Link>{' '}
        ou trazê-la de um médico de sua preferência.
      </>
    ),
  },
  {
    src: 'https://www.cannect.life/static/media/FirstAidKit.3598053e2c84e9793154979f727f011c.svg',
    alt: 'primeiros socorros icone',
    title: 'Seu tratamento',
    content: (
      <>
        Já tem uma receita?{' '}
        <a href="https://www.cannect.life/produtos/1?translated_name=" rel="noreferrer">
          Encontre o produto prescrito pelo seu médico
        </a>
        , adicione no carrinho e nos envie a receita e documento. Te ajudaremos em todo o
        processo.
      </>
    ),
  },
  {
    src: 'https://www.cannect.life/static/media/CheckSquareOffset.71478b4c6221b0bdb18f73c83d65c17f.svg',
    alt: 'check quadrado icone',
    title: 'Autorização da ANVISA',
    content: (
      <>
        Caso sua receita seja simples (branca) uma autorização da ANVISA será necessária para
        que seu produto seja liberado em solo brasileiro, aqui você encontra{' '}
        <Link
          to={'https://www.youtube.com/watch?v=cA9OQbNffME'}
          rel="noreferrer"
          target="_blank"
        >
          instruções de como obtê-la.
        </Link>
      </>
    ),
  },
  {
    src: 'https://www.cannect.life/static/media/Heartbeat.2095bfd7f9b03e664c02e424fc689807.svg',
    alt: 'hear beating icone',
    title: 'Acompanhamento',
    content: (
      <>
        Após iniciar seu tratamento, você pode receber acompanhamento de uma equipe de
        enfermagem especializada através do{' '}
        <Link to={'/cuida'} rel="noreferrer">
          cannect cuida
        </Link>
        , preparada para tirar suas dúvidas e fornecer apoio assistencial.
      </>
    ),
  },
]
