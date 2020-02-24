import { capitalize } from '../src'

describe('capitalize', () => {
  let s: string

  it('should capitalize a lower cased string', () => {
    s = 'some sentence'
    expect(capitalize(s)).toBe('Some Sentence')
  })

  it('should capitalize an upper cased string', () => {
    s = 'SOMETHING'
    expect(capitalize(s)).toBe('Something')
  })
})
