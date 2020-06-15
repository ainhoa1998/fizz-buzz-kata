import { calculateNumber } from '../src/calculateNumber.js'

describe('Kata Fizz Buzz', () => {
  it('Si el número es 4, devuelve 4', () => {
    const output = calculateNumber(4)

    expect(output).toBe(4)
  })
})
