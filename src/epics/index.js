import { combineEpics } from 'redux-observable';
import { getTodos } from './todo';

const rootEpic = combineEpics(
  getTodos,
);
export default rootEpic;
