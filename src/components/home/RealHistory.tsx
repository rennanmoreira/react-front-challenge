import { Flex, H3, Paragraph, Section, CustomLink } from '../styled.css.js'
// import { Link } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'

const RealHistory = () => {
  return (
    <>
      <Section id="section-real-history">
        <H3 style={{ fontWeight: 400, marginBottom: '42px' }}>
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
            <Tilt tiltReverse={true}>
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
            </Tilt>
            <H3
              style={{
                gap: '10px',
                display: 'flex',
                WebkitBoxAlign: 'center',
                alignItems: 'center',
                fontSize: '19px',
                fontWeight: 400,
                fontFamily: 'Nunito',
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
                fontFamily: 'Nunito',
              }}
            >
              Júlia Pires, de 33 anos, sofria com ansiedade e insônia há um tempo. Com o início
              da pandemia de COVID-19, as coisas pioraram ainda mais. Mesmo fazendo terapia há
              dois anos, ela ainda teve crises de ansiedade no início do ano passado. Foi então
              que a sua psiquiatra recomendou a Cannect. Pires t ...
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
            <Tilt tiltReverse={true}>
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
            </Tilt>
            <H3
              style={{
                gap: '10px',
                display: 'flex',
                WebkitBoxAlign: 'center',
                alignItems: 'center',
                fontSize: '19px',
                fontWeight: 400,
                fontFamily: 'Nunito',
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
                fontFamily: 'Nunito',
              }}
            >
              Elaine Hansen, de 46 anos, tinha dores constantes, que afetavam principalmente o
              estômago. Ela não conseguia dormir direito, tomava uma grande quantidade de
              remédios e não tinha qualidade de vida. Foi só depois do tratamento com Cannabis
              Medicinal que tudo começou a mudar. Em poucos meses, as d ...
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
            <Tilt tiltReverse={true}>
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
            </Tilt>
            <H3
              style={{
                gap: '10px',
                display: 'flex',
                WebkitBoxAlign: 'center',
                alignItems: 'center',
                fontSize: '19px',
                fontWeight: 400,
                fontFamily: 'Nunito',
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
              Soraia Lopes, de 52 anos, já apostava na cannabis bem antes de utilizá-la. Achar a
              Cannect só foi um facilitador para que ela finalmente fizesse o uso da terapia
              natural para tratar a fibromialgia.Ela passou a utilizar o óleo em fevereiro.
              Neste curto período, além das dores, a cannabis auxiliou na ...
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
            <Tilt tiltReverse={true}>
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
            </Tilt>
            <H3
              style={{
                gap: '10px',
                display: 'flex',
                WebkitBoxAlign: 'center',
                alignItems: 'center',
                fontSize: '19px',
                fontWeight: 400,
                fontFamily: 'Nunito',
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
              style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '7',
                WebkitBoxOrient: 'vertical',
              }}
            >
              Luciana Falcão resolveu estudar um pouquinho mais a fundo os efeitos da cannabis
              para degeneração da mácula e artrose, condições que atingiram a sua mãe,
              Ila. Descobrir a Cannect para mim foi um “achado”, porque tivemos o atendimento da
              médica, a autorização da Anvisa e importação, tudo em um s ...
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
            <Tilt tiltReverse={true}>
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
            </Tilt>
            <H3
              style={{
                gap: '10px',
                display: 'flex',
                WebkitBoxAlign: 'center',
                alignItems: 'center',
                fontSize: '19px',
                fontWeight: 400,
                fontFamily: 'Nunito',
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
              hiperatividade (TDAH). Ele já havia tentado vários outros tipos de tratamento, mas
              sem sucesso. “Nunca senti uma melhora significativa no ...
            </Paragraph>
          </Flex>
        </Flex>
        <CustomLink to={'/comunidade'}>Leia outras histórias</CustomLink>
      </Section>
    </>
  )
}

export default RealHistory
