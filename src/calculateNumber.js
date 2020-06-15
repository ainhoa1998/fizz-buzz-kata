export function calculateNumber(number) {
  const isFizz = number % 3 === 0
  const isBuzz = number % 5 === 0

  if (isFizz && isBuzz) {
    return 'FizzBuzz'
  }

  if (isBuzz) {
    return 'Buzz'
  }

  if (isFizz) {
    return 'Fizz'
  }

  return number
}
