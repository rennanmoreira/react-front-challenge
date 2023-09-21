import App from '../../src/App'
import { mount } from '@cypress/react18'

describe('<App>', () => {
  it('mounts', () => {
    mount(<App />)
  })

  it('function setCount should increment 1', () => {
    mount(<App />)
    cy.get('button').click()
    cy.get('button').should('have.text', 'count is 1')
  })
})
