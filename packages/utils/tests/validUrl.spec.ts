import { validUrl } from '../src'

describe('validUrl', () => {
  it('should return true if is a valid url', () => {
    const u = 'https://example.com/something'
    expect(validUrl(u)).toBe(true)
  })

  it('should return false if is not a valid url', () => {
    const u = 'https://example.com/^!wrong format'
    expect(validUrl(u)).toBe(false)
  })
})
