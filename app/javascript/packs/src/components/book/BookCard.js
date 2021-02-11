import React from 'react';
import { makeStyles } from '@material-ui/core';
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
  },
}));

function BookCard({ book }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>{book.title}</h2>
      <h2>{book.authors.length === 1 ? 'Author' : 'Authors'}</h2>
      {book.authors.map((author) => (
        <div key={author.id}>{author.name}</div>
      ))}
    </div>
  );
}

export default BookCard;
