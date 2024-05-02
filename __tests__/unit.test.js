// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// PhoneNumber
test('Check phone number type 1', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('Check phone number type 2', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('Check non 10 values', () => {
  expect(isPhoneNumber('911')).toBe(false);
});
test('Check no dashes', () => {
  expect(isPhoneNumber('9119114569')).toBe(false);
});

// Email
test('Check conventional email', () => {
  expect(isEmail('test@gmail.com')).toBe(true);
});
test('Check ucsd email', () => {
  expect(isEmail('test@ucsd.edu')).toBe(true);
});
test('Check school district email (non-working due to Regex limits)', () => {
  expect(isEmail('test@cnusd.k12.edu')).toBe(false);
});
test('Check no @', () => {
  expect(isEmail('testucsd.edu')).toBe(false);
});

// StrongPassword
test('Check all lowercase', () => {
  expect(isStrongPassword('testucsdedu')).toBe(true);
});
test('Check short', () => {
  expect(isStrongPassword('test')).toBe(true);
});
test('Check too long', () => {
  expect(isStrongPassword('testucsdeduqwert3456')).toBe(false);
});
test('Check too short', () => {
  expect(isStrongPassword('tes')).toBe(false);
});

// Date
test('Check single digit month/day', () => {
  expect(isDate('1/1/2024')).toBe(true);
});
test('Check double digit month/day', () => {
  expect(isDate('10/10/2024')).toBe(true);
});
test('Check double digit year', () => {
  expect(isDate('10/10/24')).toBe(false);
});
test('Check dash instead of slash', () => {
  expect(isDate('10-10-2024')).toBe(false);
});

// Hex Color
test('Check 3 digit code', () => {
  expect(isHexColor('#000')).toBe(true);
});
test('Check 6 digit code', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});
test('Check 7 digit code', () => {
  expect(isHexColor('#FFFFFFF')).toBe(false);
});
test('Check 2 digit code', () => {
  expect(isHexColor('#FF')).toBe(false);
});