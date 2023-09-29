import styled from 'styled-components'
import Footer from '../components/Footer'
import { PageContent, PageWrapper } from '../components/styled.css.ts'
import Ecosystem from '../components/home/Ecosystem.tsx'
import Medicinal from '../components/home/Medicinal.tsx'
import News from '../components/home/News.tsx'
import Partners from '../components/home/Partners.tsx'
import Process from '../components/home/Process.tsx'
import RealHistory from '../components/home/RealHistory.tsx'
import Science from '../components/home/Science.tsx'
import Welcome from '../components/home/Welcome.tsx'
import YourWay from '../components/home/YourWay.tsx'
import '@/styles/home.scss'

const Root = styled.div`
  padding: 120px 0 0;
  flex-flow: column;
  place-content: center space-between;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: 14px Nunito;
`

const Home = () => {
  return (
    <>
      <Root id="main-app-container">
        <PageWrapper id="page-wrapper">
          <PageContent className="page-content">
            <Welcome />
            <YourWay />
            <Ecosystem />
            <Science />
            <Process />
            <Medicinal />
            <RealHistory />
            <Partners />
            <News />
          </PageContent>
          <Footer />
        </PageWrapper>
      </Root>
    </>
  )
}

export default Home
