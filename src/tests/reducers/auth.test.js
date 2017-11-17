import React from 'react';
import authReducer from '../../reducers/auth';

test('should return uid from authReducer on login', () => {
  const action = { type: 'LOGIN', uid: 'user12345' };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid from authReducer on logout', () => {
  const action = { type: 'LOGOUT'};
  const state = authReducer({}, action);
  expect(state).toEqual({});
});