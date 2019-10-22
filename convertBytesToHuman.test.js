/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B')
  expect(convertBytesToHuman(5)).toBe('5 B')
  expect(convertBytesToHuman(1023)).toBe('1023 B')
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(7*1024)).toBe('7 KB')
  expect(convertBytesToHuman(1024*1023)).toBe('1023 KB')
  expect(convertBytesToHuman(1048576)).toBe('1 MB')
  expect(convertBytesToHuman(42*1048576)).toBe('42 MB')
  expect(convertBytesToHuman(1023*1048576)).toBe('1023 MB')
  expect(convertBytesToHuman(1073741824)).toBe('1 GB')
  expect(convertBytesToHuman(1023*1073741824)).toBe('1023 GB')
  expect(convertBytesToHuman(null)).toBe('0 B')
});

// другая группа проверок

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman(1024*1073741824)).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman([])).toBe(false)
  expect(convertBytesToHuman(-NaN)).toBe(false)
  expect(convertBytesToHuman(-Infinity)).toBe(false)
});



