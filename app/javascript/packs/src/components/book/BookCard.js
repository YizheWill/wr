import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    height: 400,
    backgroundColor: '#444',
    color: 'gold',
    boxShadow: '1px 1px 3px 1px rgbs(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    borderRadius: 5,
    cursor: 'pointer',
  },
}));

function BookCard({ book }) {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      onClick={() => history.push('/books/' + book.id)}
    >
      <h2>
        {book.title.length > 20 ? book.title.slice(0, 20) + '...' : book.title}
      </h2>
      <h2>{book.authors.length === 1 ? 'Author' : 'Authors'}</h2>
      {book.authors.map((author) => (
        <div key={author.id}>{author.name}</div>
      ))}
    </div>
  );
}

export default BookCard;
