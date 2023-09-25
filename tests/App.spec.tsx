import { describe, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../src/pages/App'

const sum = (a, b) => {
  return a + b
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

// function setCount should increment 1
describe('App', () => {
  test('function setCount should increment 1', () => {
    render(<App></App>)

    fireEvent.click(screen.getByText(/count is 0/i))

    expect(screen.getByText(/count is 1/i)).toBeDefined()
  })
})
