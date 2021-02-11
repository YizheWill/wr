import { combineReducers } from 'redux';
import books from './books';
import authors from './authors';
import book from './book';
import author from './author';

export default combineReducers({
  books,
  authors,
  book,
  author,
});
