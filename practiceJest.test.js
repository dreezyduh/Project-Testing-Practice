const { experiments } = require('webpack');
const practiceJest = require('./practiceJest');

test('capitalize first character', () => {
    expect(practiceJest.capitalize('cat')).toBe('Cat')
})

test('capitalize first character', () => {
    expect(practiceJest.capitalize('capsuna')).toBe('Capsuna')
})

test('reverse string', () => {
    expect(practiceJest.reverse('capsuna')).toBe('anuspac')
})

test('reverse string', () => {
    expect(practiceJest.reverse('spanac')).toBe('canaps')
})

test('Calculator', () => {
    expect(practiceJest.calculator.add(10, 5)).toBe(15);
    expect(practiceJest.calculator.divide(10, 5)).toBe(2);
    expect(practiceJest.calculator.multiply(10, 5)).toBe(50);
})

test('Caesar Cipher', () => {
    expect(practiceJest.caesarCipher('xyz', 3)).toBe('abc');
    expect(practiceJest.caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(practiceJest.caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    expect(practiceJest.caesarCipher('marcus crassus', 5)).toBe('rfwhzx hwfxxzx');
})

test('Analyze array average', () => {
    expect(practiceJest.analyzeArray([1,8,3,4,2,6]).average).toBe(4)
})

test('Analyze array min', () => {
    expect(practiceJest.analyzeArray([1,8,3,4,2,6]).min).toBe(1)
})

test('Analyze array max', () => {
    expect(practiceJest.analyzeArray([1,8,3,4,2,6]).max).toBe(8)
})

test('Analyze array length', () => {
    expect(practiceJest.analyzeArray([1,8,3,4,2,6]).length).toBe(6)
})