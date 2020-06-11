// Test para kata fizz buzz
describe('Kata Fizz Buzz', () => {
  it('el primer elemento debería ser 1', () => {
    //Arrange

    //Act
    const outputFB = fizzBuzz()

    //Assert
    expect(outputFB[0]).toBe('1')
  })
})

function fizzBuzz() {
  return '1'
}
