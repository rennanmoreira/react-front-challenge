import styled from 'styled-components'

interface NewcomProps {
  className?: string
}

const Newcom = ({ className }: NewcomProps) => {
  return (
    <div className={className}>
      <h2>Heading 2</h2>
      <button>Click Me!</button>
    </div>
  )
}

const Wrapper = styled(Newcom)`
  h2 {
    color: green;
    text-align: center;
  }

  button {
    padding: 4px 10px;
    background-color: violet;
    border: none;
  }
`

export default Wrapper
