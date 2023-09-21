import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Não encontramos o que esta procurando!</h1>
      <p>Deve ter acontecido algum engano, pois essa página não existe.</p>

      <Link to={'/'}>Voltar para o início</Link>
    </div>
  )
}
