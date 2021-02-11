import { RECEIVE_BOOKS } from '../actions/BooksAction';
const _initState = {};
export default (oldState = _initState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOOKS:
      return action.payload;
    default:
      return oldState;
  }
};
