import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionFetchBooks, actionSearchBook } from '../../actions/BooksAction';
import BookCard from './BookCard';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' },
}));

function Books({ books, fetchBooks }) {
  const classes = useStyles();
  useEffect(() => {
    fetchBooks();
  }, []);
  if (!books.length) return null;
  return (
    <div className={classes.root}>
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
}

export default connect(
  (state) => ({ books: Object.values(state.entities.books) }),
  (dispatch) => ({ fetchBooks: () => dispatch(actionFetchBooks()) })
)(Books);
