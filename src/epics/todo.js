import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import * as todoTypes from '../redux/todo/todo.types';

const getTodos = action$ => action$.pipe(
  ofType(todoTypes.GET_TODOS),
  mergeMap((action) => {
    const { callback } = action.payload;
    // do somethings
    return {
      data: [],
      callback,
    };
  }),
  map((res) => {
    if (res && res.error) {
      res.callback(res.error);
      return {
        type: todoTypes.GET_TODOS_FAIL,
        payload: res.error,
      };
    }

    res.callback();
    return {
      type: todoTypes.GET_TODOS_SUCCESS,
      payload: res.data,
    };
  }),
);
export {
  getTodos,
};
