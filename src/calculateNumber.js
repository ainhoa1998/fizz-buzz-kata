export function calculateNumber(number) {
  const multiplo3 = number % 3 === 0

  if (multiplo3 && number % 5 === 0) {
    return 'FizzBuzz'
  }

  if (number % 5 === 0) {
    return 'Buzz'
  }

  if (multiplo3) {
    return 'Fizz'
  }

  return number
}
