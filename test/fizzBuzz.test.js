import { calculateNumber } from '../src/fizzBuzz.js'
describe('Kata Fizz Buzz', () => {
  it('Si el número no es múltiplo de 3 ni de 5, devuelve el mismo número', () => {
    const outputFizzBuzz = calculateNumber(4)
    // que el número devuelto es 4
    expect(outputFizzBuzz).toBe(4)
  })
})
