import React from 'react';
import { render } from '@testing-library/react';

import { Slides } from './index';
import options, { staffs, getStaffs } from './options';

test('Staffs Count', () => {
  expect(staffs.length).toBe(9);
});

test('Staffs is an array', () => {
  expect(Array.isArray(staffs)).toBe(true);
});

test('Staffs Objects Count', () => {
  expect(getStaffs().length).toBe(staffs.length);
});

test('getStaffs is an array', () => {
  expect(Array.isArray(getStaffs())).toBe(true);
});

test('Options is an array', () => {
  expect(Array.isArray(options)).toBe(true);
});
