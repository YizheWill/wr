import { RECEIVE_BOOK } from '../actions/BooksAction';
const _initState = {};
export default (oldState = _initState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOOK:
      return action.payload.book;
    default:
      return oldState;
  }
};
