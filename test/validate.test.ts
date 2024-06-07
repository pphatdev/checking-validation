import Validate from "../src/index";
import { expect } from '@jest/globals';

test('Validate.phone("093 335 357") => true', () => {
    const result = Validate.phone('093 335 357')
    expect(result).toBe(true)
})

test('Validate.phone("+855 93 335 357") => true', () => {
    const result = Validate.phone('+855 93 335 357')
    expect(result).toBe(true)
})

test('Validate.phone("550 93 335 357") => false', () => {
    const result = Validate.phone('550 93 335 357')
    expect(result).toBe(false)
})

test('Validate.phone("+8550 93 335 357") => false', () => {
    const result = Validate.phone('+8550 93 335 357')
    expect(result).toBe(false)
})

test(`Validate.email('info.sophat@gmail.com') => true`, () => {
    const result = Validate.email('info.sophat@gmail.com')
    expect(result).toBe(true)
});

test(`Validate.email('-info.sophat@gmail.com') => false`, () => {
    const result = Validate.email('-info.sophat@gmail.com')
    expect(result).toBe(false)
});

test('Validate.password("@FFss234") => true', () => {
    const result = Validate.password('@FFss234')
    expect(result).toBe(true)
})

test('Validate.password("12345") => false', () => {
    const result = Validate.password('12345')
    expect(result).toBe(false)
})

test('Validate.password("abc") => false', () => {
    const result = Validate.password('abc')
    expect(result).toBe(false)
})

test('Validate.isEmpty("") => true', () => {
    const result = Validate.isEmpty('')
    expect(result).toBe(true)
})

test('Validate.isEmpty(" ") => true', () => {
    const result = Validate.isEmpty(' ')
    expect(result).toBe(true)
})

test('Validate.isEmpty() => true', () => {
    const result = Validate.isEmpty()
    expect(result).toBe(true)
})

test('Validate.isEmpty(null) => true', () => {
    const result = Validate.isEmpty(null)
    expect(result).toBe(true)
})

test('Validate.isEmpty("abc") => flase', () => {
    const result = Validate.isEmpty('abc')
    expect(result).toBe(false)
})

test('Validate.isNumber("123") => true', () => {
    const result = Validate.isNumber('123')
    expect(result).toBe(true)
})

test('Validate.isNumber("abc") => flase', () => {
    const result = Validate.isNumber('abc')
    expect(result).toBe(false)
})