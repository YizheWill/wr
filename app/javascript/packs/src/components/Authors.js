import React, { useEffect } from 'react';
import { actionFetchAuthors } from '../actions/AuthorsAction';
import { connect } from 'react-redux';
import AuthorCard from './AuthorCard';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' },
}));

function Authors({ authors, getAuthors }) {
  const classes = useStyles();
  useEffect(() => {
    getAuthors();
  }, []);
  if (!authors.length) return null;
  return (
    <div className={classes.root}>
      {authors.map((author) => (
        <AuthorCard key={author.id} author={author} />
      ))}
    </div>
  );
}

export default connect(
  (state) => ({ authors: Object.values(state.entities.authors) }),
  (dispatch) => ({ getAuthors: () => dispatch(actionFetchAuthors()) })
)(Authors);
