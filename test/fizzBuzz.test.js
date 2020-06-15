import { fizzBuzz } from '../src/fizzBuzz'

describe('Kata Fizz Buzz', () => {
  it('Comprueba primer elemento', () => {
    const output = fizzBuzz().split('\n')

    expect(output[0]).toBe('1')
  })
})
