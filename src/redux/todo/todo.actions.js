import * as types from './todo.types';

export const getTodos = (data, callback) => ({
  type: types.GET_TODOS,
  payload: { data, callback },
});
