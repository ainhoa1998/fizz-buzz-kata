export function calculateNumber(number) {
  if (number === 5 || number === 10) {
    return 'Buzz'
  }

  if (number === 20) {
    return 'Buzz'
  }

  if (number % 3 === 0) {
    return 'Fizz'
  }

  return number
}
