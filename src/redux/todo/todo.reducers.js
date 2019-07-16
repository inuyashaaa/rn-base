import * as types from './todo.types';

const initState = [];
export default function init(state = initState, action) {
  switch (action.type) {
  case types.GET_TODOS:
    return { ...state };
  case types.GET_TODOS_FAIL:
    return {
      error: action.payload,
    };
  case types.GET_TODOS_SUCCESS:
    return [...action.payload];
  default:
    return state;
  }
}
