import deepFreeze from 'deep-freeze';
import { describe, expect, test } from 'vitest';

import counterReducer from './counterReducer';


describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  };

  test('should return a proper initial state when called with undefined state', () => {
    const action = {
      type: 'DO_NOTHING'
    };

    const newState = counterReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    });
  });

  test('ok is incremented', () => {
    const action = { type: 'OK' };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    });
  });

  test('bad is incremented', () => {
    const action = { type: 'BAD' };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    });
  });

  test('reset is working', () => {
    const goodAction = { type: 'GOOD' };
    const okAction = { type: 'OK' };
    const resetAction = { type: 'RESET' };
    const state = initialState;

    deepFreeze(state);
    const newStateAfterGood = counterReducer(state, goodAction);
    expect(newStateAfterGood).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    });
    const newStateAfterOk = counterReducer(newStateAfterGood, okAction);
    expect(newStateAfterOk).toEqual({
      good: 1,
      ok: 1,
      bad: 0
    });
    const newStateAfterReset = counterReducer(newStateAfterOk, resetAction);
    expect(newStateAfterReset).toEqual({
      good: 0,
      ok: 0,
      bad: 0
    });
  });
});
