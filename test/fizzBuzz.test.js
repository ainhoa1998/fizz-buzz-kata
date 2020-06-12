import { calculateNumber } from '../src/fizzBuzz.js'
describe('Kata Fizz Buzz', () => {
  it('Si el número no es múltiplo de 3 ni de 5, devuelve el mismo número', () => {
    const outputFizzBuzz = calculateNumber(4)
    // que el número devuelto es 4
    expect(outputFizzBuzz).toBe(4)
  })
  it('Si el número no es múltiplo de 3 ni de 5, devuelve el mismo número', () => {
    const outputFizzBuzz = calculateNumber(7)
    // que el número devuelto es 4
    expect(outputFizzBuzz).toBe(7)
  })
  it('Si el número es múltiplo de 3, devuelve Fizz', () => {
    const outputFizzBuzz = calculateNumber(3)
    // que el número devuelto es 4
    expect(outputFizzBuzz).toBe('Fizz')
  })
  it('Si el número es múltiplo de 3, devuelve Fizz', () => {
    const outputFizzBuzz = calculateNumber(9)
    // que el número devuelto es 4
    expect(outputFizzBuzz).toBe('Fizz')
  })
})
