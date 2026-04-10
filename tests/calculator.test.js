import { add, subtract, multiply, divide, modulo, power } from '../src/calculator.js';

describe('Calculator', () => {
  describe('add()', () => {
    test('Cong hai so duong', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('Cong mot so am', () => {
      expect(add(-1, 5)).toBe(4);
    });

    test('Cong voi so khong', () => {
      expect(add(0, 7)).toBe(7);
    });
  });

  describe('subtract()', () => {
    test('Tru hai so duong', () => {
      expect(subtract(10, 3)).toBe(7);
    });
  });

  describe('multiply()', () => {
    test('Nhan hai so', () => {
      expect(multiply(4, 5)).toBe(20);
    });
  });

  describe('divide()', () => {
    test('Chia hai so', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('Nem loi khi chia cho so khong', () => {
      expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('modulo()', () => {
    test('Lay phan du cua hai so', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('Nem loi khi chia cho so khong', () => {
      expect(() => modulo(5, 0)).toThrow('Cannot modulo by zero');
    });
  });

  describe('power()', () => {
    test('Kiểm tra tính lũy thừa của hai số', () => {
      expect(power(2, 3)).toBe(8);
    });
  });
});