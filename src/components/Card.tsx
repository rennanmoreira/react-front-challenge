import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Root = styled.div`
  width: 216px;
  height: 281px;
`

const Card = ({ alt, src, toPath }) => {
  return (
    <>
      <Root>
        <header></header>
        <Link to={toPath}>
          <img alt={alt} src={src} />
        </Link>
        <footer></footer>
      </Root>
    </>
  )
}

export default Card
