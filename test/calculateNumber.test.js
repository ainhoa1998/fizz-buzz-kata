import { calculateNumber } from '../src/calculateNumber.js'

describe('Calculate number', () => {
  it('Si el número es 4, devuelve 4', () => {
    const output = calculateNumber(4)

    expect(output).toBe(4)
  })

  it('Si el número es 7, devuelve 7', () => {
    const output = calculateNumber(7)

    expect(output).toBe(7)
  })
})
