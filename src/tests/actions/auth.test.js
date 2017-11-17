import React from 'react';
import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
  const uid = 'user12345';
  const action = login(uid);
  expect(action).toEqual({ type: 'LOGIN', uid });
});

test('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({ type: 'LOGOUT' });
});