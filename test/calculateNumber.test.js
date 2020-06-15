import { calculateNumber } from '../src/calculateNumber.js'

describe('Kata Fizz Buzz', () => {
  it('Si el número no es múltiplo de 3 ni de 5, devuelve el mismo número', () => {
    const output = calculateNumber(4)

    expect(output).toBe(4)
  })
})
