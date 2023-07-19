import { classNames } from './classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional params', () => {
    expect(classNames('someClass', ['firstclass', 'secondclass'])).toBe(
      'someClass firstclass secondclass'
    )
  })

  test('with mods params all true', () => {
    expect(classNames('someClass', [], { modsclass: true })).toBe(
      'someClass modsclass'
    )
  })

  test('with mods params first true, second false', () => {
    expect(
      classNames('someClass', [], { modsclass: true, modssecond: false })
    ).toBe('someClass modsclass')
  })

  test('with mods params first true, second false, third undefined', () => {
    expect(
      classNames('someClass', [], {
        modsclass: true,
        modssecond: false,
        third: undefined,
      })
    ).toBe('someClass modsclass')
  })

  test('with mods params first true, second false, third undefined, five true', () => {
    expect(
      classNames('someClass', [], {
        modsclass: true,
        modssecond: false,
        third: undefined,
        five: true,
      })
    ).toBe('someClass modsclass five')
  })
})
