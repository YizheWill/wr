import React from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles, Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    margin: 30,
    padding: 30,
    boxShadow: '1px 1px 3px 1px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  titles: {},
}));

export default function AuthorCard({ author }) {
  const history = useHistory();
  console.log('author', author);
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      onClick={() => history.push(`/authors/${author.id}`)}
    >
      <div className={classes.userInfo}>
        <Avatar
          style={{
            marginRight: '1rem',
            backgroundColor: '#444',
            color: 'gold',
          }}
        >
          {author?.name
            ?.split(' ')
            ?.map((el) => el[0])
            ?.join('')
            ?.slice(0, 1)}
        </Avatar>
        <h3>{author.name}</h3>
      </div>
      <Divider style={{ margin: 15, marginBottom: 30 }} />
      <h3>Works</h3>
      <div className={classes.titles}>
        {author.books.map((book) => (
          <p
            style={{ fontWeight: 'bold', textDecoration: 'underline' }}
            onClickCapture={(e) => {
              e.nativeEvent.stopPropagation();
              history.push(`/books/${book.id}`);
            }}
          >
            {book.title}
          </p>
        ))}
      </div>
    </div>
  );
}
