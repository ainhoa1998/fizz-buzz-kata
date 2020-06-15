export function calculateNumber(number) {
  const multiplo3 = number % 3 === 0
  const multiplo5 = number % 5 === 0

  if (multiplo3 && multiplo5) {
    return 'FizzBuzz'
  }

  if (multiplo5) {
    return 'Buzz'
  }

  if (multiplo3) {
    return 'Fizz'
  }

  return number
}
