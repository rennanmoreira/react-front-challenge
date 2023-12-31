import { Flex, H3, Paragraph, Section } from '../styled.css.js'
import Button from '../Button.js'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <>
      <Section id="section-novidades">
        <H3>
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
            <Flex className="card-blog">
              <img src="https://strapi.cannect.life/uploads/thumbnail_cbd_oil_5358403_640_165e4e85bd.jpg" />
              <H3>Canabidiol (CBD): o que é e para que serve?</H3>
              <Paragraph>
                {' '}
                Imagem: Pixabay &nbsp; Quando pensamos em cannabis medicinal, é bem provável que
                também pensemos no&nbsp; canabidiol (CBD) , que é o componente da cannabis
                sativa mais conhecido por suas propriedades terapêuticas. É classificado como um
                canabinoide maior, pois é encontrado em maior quantidade na composição da
                planta, assim como o&nbsp; tetrahidrocanabinol (THC) . &nbsp; Um dos
                diferenciais do CBD para outros fármacos convencionais, como comprimidos
                antidepressivos, é a quantidade bem menor de efeitos colaterais. Por se tratar
                de um tratamento natural, sua “transformação” para virar remédio não depende de
                sintéticos, portanto, a pureza do tratamento é ligada a funções naturais do
                organismo que serão explicadas abaixo. &nbsp; Em suma, o canabidiol apresenta
                efeitos terapêuticos que contam com diversas evidências científicas que estão
                aos poucos provando sua eficácia. O chamado&nbsp; efeito entourage , que é a
                interação com outros compostos da cannabis, é uma forma de potencializar os
                efeitos e ter resultados mais velozes. Dessa forma, os produtos à base de
                cannabis podem ser divididos em três categorias :&nbsp; Espectro Completo (que
                possuem todos os canabinoides),&nbsp; Espectro Amplo (todos os componentes menos
                o THC) e as versões de&nbsp; CBD isolado .&nbsp; &nbsp; Para que serve o
                canabidiol? &nbsp; O uso do canabidiol vem sendo embasado por diversos estudos
                nacionais e internacionais. Diferentemente do THC que em altas quantidades gera
                efeitos psicoativos, o CBD não desempenha esse papel . Porém, mais pesquisas são
                necessárias para afirmar quais dosagens são as melhores para tratar cada
                patologia.&nbsp; &nbsp; Principais características &nbsp; Segundo a&nbsp;
                Fiocruz , o CBD tem efeitos anticonvulsivantes, ansiolíticos, antioxidantes e
                anti-inflamatórios. Por outro lado, o THC que pode intensificar o potencial
                terapêutico do canabidiol, possui ação analgésica e anti-náusea, e estimula o
                apetite.&nbsp; &nbsp; A interação com o corpo é feita através do Sistema
                Endocanabinoide (SEC), que regula a homeostase e mantém o corpo em equilíbrio.
                Ao detectar doenças, por exemplo, é este sistema que comunica o cérebro para
                retomar as funções do organismo. E dessa forma, as propriedades do canabidiol
                aceleram a capacidade do SEC de se autoproteger. &nbsp; Para quais tratamentos o
                canabidiol é indicado? &nbsp; O tratamento com cannabis medicinal poderia
                atingir quase 7 milhões de brasileiros, de acordo com a&nbsp; Kaya Mind ,
                empresa de dados sobre cannabis medicinal. Isso aconteceria porque diversas
                condições de saúde podem ser tratadas com a terapêutica, e o CBD seria útil para
                praticamente todas.&nbsp; Pesquisas mais avançadas estão na neurologia, em
                doenças como epilepsia, Alzheimer, Parkinson e esclerose múltipla.&nbsp; &nbsp;
                Para a saúde mental, é uma opção natural para ansiedade, depressão e síndrome do
                estresse pós-traumático. &nbsp; De acordo com um&nbsp; estudo , o CBD combinado
                THC pode reduzir os sintomas de náusea em pacientes com câncer. Os pesquisadores
                avaliaram a aplicação das substâncias em alguns pacientes com essas condições:
                um grupo recebeu cápsulas com canabinoides e outro um placebo. Uma resposta
                completa aos sintomas foi percebida em 24% dos pacientes que receberam os
                derivados de cannabis.&nbsp; &nbsp; Onde comprar o canabidiol? &nbsp; Produtos à
                base de cannabis são permitidos no Brasil desde 2015, porém, a fabricação só é
                autorizada para alguns medicamentos específicos. Dessa forma, a Anvisa controla
                todo o processo de&nbsp; importação por meio da Resolução da Diretoria Colegiada
                (RDC) nº 660, de 2022, e as compras dessa categoria, que são a maioria no país,
                devem seguir minuciosamente a legislação. &nbsp; Sendo assim, para comprar o
                óleo de canabidiol, por exemplo, será necessário passar por uma consulta com um
                profissional de saúde legalmente habilitado no conselho regional de sua
                profissão. Depois de sair com a prescrição, o paciente deverá solicitar a
                autorização para importar canabinoides. Isso pode ser feito pela&nbsp;
                Plataforma de Serviços do Governo Federal . &nbsp; Clique aqui para saber como
                solicitar a autorização da Anvisa &nbsp; Com todas as informações certificadas,
                você poderá importar os produtos ou adquiri-los em farmácias ou associações de
                cannabis medicinal. &nbsp; Conheça o ecossistema da Cannect &nbsp; A&nbsp;
                Cannect é uma empresa que facilita o processo de importação!&nbsp; &nbsp;
                Possuímos o maior&nbsp; portfólio de produtos à base de cannabis da América
                Latina, com diferentes concentrações de CBD e outros componentes, a depender do
                caso. &nbsp; Com os documentos em mãos, os pacientes poderão ter acesso à
                terapêutica em até&nbsp; 25 dias contados a partir da confirmação do pagamento .
                Certificamos se a documentação está correta e dentro dos padrões exigidos pela
                Anvisa e levamos os produtos até a casa de cada solicitante.&nbsp; &nbsp; Além
                disso, conectamos os pacientes ao profissionais de saúde, que serão responsáveis
                pelo início do tratamento, como citado acima. Acesse nossa plataforma de &nbsp;
                Agendamento de Consultas &nbsp; e defina seu atendimento filtrando por
                patologia, especialidade atendida e preço.{' '}
              </Paragraph>
            </Flex>
          </Link>

          <Link to={'/blog/novidades/site-da-cannalize-esta-de-cara-nova-confira-as-mudancas'}>
            <Flex className="card-blog">
              <img src="https://strapi.cannect.life/uploads/thumbnail_Novo_site_cannalize_foto_a23b597ca0.png" />
              <H3>Site da Cannalize está de cara nova, confira as principais mudanças</H3>
              <Paragraph>
                {' '}
                Imagem: Cannalize &nbsp; O tratamento com cannabis está crescendo muito no
                Brasil e no mundo. Além da necessidade de educar este mercado, é muito
                importante informar a população de forma correta e segura. &nbsp; Por isso,
                a&nbsp; Cannalize , plataforma de notícias sobre cannabis medicinal, foi criada
                em março de 2020, pelo jornalista Nathan Candido.&nbsp; &nbsp; Quase dois anos
                depois, o portal passou a fazer parte do&nbsp; ecossistema da Cannect e colabora
                com nosso trabalho noticiando sobre estudos científicos, patologias que podem
                ser tratadas, legislações e relatos de pessoas que fazem o tratamento. &nbsp; O
                site acabou de passar mudanças em sua estrutura, com objetivo de atrair mais
                leitores ao conversar com públicos diferentes. Tais melhorias começam pelo
                cabeçalho, que agora está com as verticais (ícones de busca) mais
                organizadas.&nbsp; &nbsp; Dessa forma, será possível procurar por assuntos
                específicos como notícias recentes, doenças, linhas de tratamentos e formas
                de&nbsp; agendar uma consulta com a Cannect.&nbsp; &nbsp; Cannateca &nbsp; A
                Cannalize conta com uma parte específica para quem quer informações mais
                completas e contextualizadas sobre algum assunto. Trata-se da “ Cannateca ”, que
                é costumeiramente abastecida e-books, como os sobre&nbsp; ansiedade e&nbsp;
                depressão , lançados recentemente.&nbsp; &nbsp; O espaço também conta com vídeos
                e entrevistas com profissionais de saúde e representantes de instituições ou
                empresas de cannabis medicinal.&nbsp; &nbsp; Colunas &nbsp; Mais uma mudança de
                destaque é a divisão das&nbsp; colunas , que agora está visível no rodapé da
                página. Além das que já existiam, entraram algumas inéditas como a coluna da
                Cannect que terá textos mensais sobre as ferramentas da empresa e soluções para
                quem quer começar um tratamento.&nbsp; Conheça mais sobre o&nbsp; site da
                Cannalize e saiba o que está acontecendo no universo da cannabis
                medicinal!&nbsp;{' '}
              </Paragraph>
            </Flex>
          </Link>
          <Link to={'/blog/novidades/inscricoes-do-premio-cannect-prorrogadas'}>
            <Flex className="card-blog">
              <img src="https://strapi.cannect.life/uploads/large_warning_sign4_a8289969ef.jpg" />
              <H3>ATENÇÃO: Inscrições do Prêmio Cannect são prorrogadas!</H3>
              <Paragraph>
                {' '}
                A maior plataforma de cannabis medicinal da América Latina anunciou, em maio, a
                primeira edição do&nbsp; Prêmio Cannect de Incentivo à Pesquisa . Para que mais
                profissionais de saúde e pesquisadores tenham oportunidade de impulsionar seus
                trabalhos,&nbsp; as inscrições foram prorrogadas até 29 de setembro ! &nbsp; Com
                exceção da mudança na data, as demais regras permanecem as mesmas, especialmente
                nos critérios de avaliação. &nbsp; Todos os projetos devem ser relacionados com
                cannabis medicinal ou Sistema Endocanabinoide, e só serão aceitas pesquisas
                originais, ou seja, que ainda não tenham sido publicadas.Trabalhos desenvolvidos
                nos nos últimos 24 meses também serão aceitos. &nbsp; Para inscrever seu projeto
                científico, os participantes deverão enviar seus dados pessoais e submeter as
                informações da pesquisa.&nbsp; Clique aqui para fazer sua inscrição.&nbsp;
                &nbsp; A taxa de inscrição é de R$ 50,00. &nbsp; Categorias do Prêmio &nbsp; O
                Prêmio Cannect contará com duas categorias:&nbsp; &nbsp; Casos Clínicos : que
                engloba relatos de casos, séries de casos, coortes, casos-controle e outros.
                &nbsp; Ciências Aplicadas à Saúde : para estudos pré-clínicos, in vitro,
                análises populacionais-demográficas e outras pesquisas de níveis de evidência
                semelhantes. &nbsp; Independente da categorias, todos os trabalhos deverão ser
                enviados exclusivamente pela página oficial, devendo seguir as normas da ABNT
                (Associação Brasileira de Normas Técnicas) e nos formatos&nbsp; “.doc”, “.docx”
                e “.pdf”. Será possível submeter mais de um trabalho, porém, enviados
                separadamente. &nbsp; Etapas &nbsp; Na primeira fase do concurso, a Banca
                Avaliadora aprovará cinco trabalhos de cada categoria para uma apresentação
                presencial. &nbsp; Serão considerados os critérios: originalidade, relevância,
                resultados e metodologias, coerência e coesão. &nbsp; Apresentação &nbsp; Os
                pesquisadores finalistas terão dez minutos para apresentar seus resultados, e
                através disso, será escolhido um vencedor para cada categoria. Estes receberão
                um prêmio em dinheiro, no valor de R$ 3000,00. Além disso, os trabalhos de mais
                destaque também poderão ser publicados em uma revista científica de grande
                destaque com supervisão da Cannect.&nbsp; &nbsp; Confira o&nbsp; edital oficial
                para entender mais sobre as fases do concurso, bem como premiação,
                responsabilidades e deveres do candidato.&nbsp; &nbsp; Se você gostaria de
                contribuir&nbsp; de alguma forma com o avanço das pesquisas sobre cannabis
                medicinal, não perca tempo e envie sua proposta!{' '}
              </Paragraph>
            </Flex>
          </Link>
        </Flex>
        <Button title={'Veja mais'} variant="primary" />
      </Section>
    </>
  )
}

export default News
