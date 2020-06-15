describe('Kata Fizz Buzz', () => {
  it('Devuelve un string con todos los números del 1 al 100 cambiando los múltiplos de 3 por Fizz, los de 5 por Buzz y los de 3 y 5 por FizzBuzz', () => {
    const output = fizzBuzz().split('\n')

    expect(output[0]).toBe('1')
  })
})

function fizzBuzz() {
  return '1'
}
