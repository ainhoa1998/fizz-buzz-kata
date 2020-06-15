export function calculateNumber(number) {
  const isFizz = number % 3 === 0
  const multiplo5 = number % 5 === 0

  if (isFizz && multiplo5) {
    return 'FizzBuzz'
  }

  if (multiplo5) {
    return 'Buzz'
  }

  if (isFizz) {
    return 'Fizz'
  }

  return number
}
