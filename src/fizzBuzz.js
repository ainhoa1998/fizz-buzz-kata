import { calculateNumber } from '../src/calculateNumber'

export function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    console.log(calculateNumber(i))
  }
}
