import { calculateNumber } from '../src/calculateNumber.js'

describe('Calculate number', () => {
  it('Si el número es 4, devuelve 4', () => {
    const output = calculateNumber(4)

    expect(output).toBe(4)
  })

  it('Si el número es 7, devuelve 7', () => {
    const output = calculateNumber(7)

    expect(output).toBe(7)
  })

  it('Si el número es 13, devuelve 13', () => {
    const output = calculateNumber(13)

    expect(output).toBe(13)
  })

  it('Si el número es 3, devuelve Fizz', () => {
    const output = calculateNumber(3)

    expect(output).toBe('Fizz')
  })

  it('Si el número es 6, devuelve Fizz', () => {
    const output = calculateNumber(6)

    expect(output).toBe('Fizz')
  })
})
