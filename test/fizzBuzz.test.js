import { fizzBuzz } from '../src/fizzBuzz.js'
describe('Kata Fizz Buzz', () => {
  it('el primer elemento debería ser 1', () => {
    //Arrange

    //Act
    const outputFizzBuzz = fizzBuzz()

    //Assert
    expect(outputFizzBuzz[0]).toBe('1')
  })
  it('el segundo elemento debería ser 2', () => {
    //Arrange

    //Act
    const outputFizzBuzz = fizzBuzz()

    //Assert
    expect(outputFizzBuzz[2]).toBe('2')
  })
})
