import { add, subtract, multiply, divide, modulo } from '../src/calculator.js';

describe('Calculator', () => {

  describe('add()', () => {
    test('Cộng hai số dương', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('Cộng một số âm', () => {
      expect(add(-1, 5)).toBe(4);
    });

    test('Cộng với số không', () => {
      expect(add(0, 7)).toBe(7);
    });
  });

  describe('subtract()', () => {
    test('Trừ hai số dương', () => {
      expect(subtract(10, 3)).toBe(7);
    });

    test('Trừ với số âm', () => {
      expect(subtract(5, -3)).toBe(8);
    });
  });

  describe('multiply()', () => {
    test('Nhân hai số', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    test('Nhân với số âm', () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe('divide()', () => {
    test('Chia hai số', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('Chia với số âm', () => {
      expect(divide(-10, 2)).toBe(-5);
    });

    test('Ném lỗi khi chia cho số không', () => {
      expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('modulo()', () => {
    test('Chia lấy dư', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('Modulo với số âm', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('Modulo chia 0', () => {
      expect(() => modulo(5, 0)).toThrow('Cannot divide by zero');
    });
  });

});