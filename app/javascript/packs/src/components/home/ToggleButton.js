import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    marginTop: '1rem',
    justifyContent: 'center',
  },
  buttons: {
    border: 'none',
    padding: '0 25px',
    fontFamily: "'Oswald', sans-serif",
    height: 50,
    fontSize: 17,
    fontWeight: 700,
  },
}));

export default function ToggleButtons({ setPage }) {
  const [alignment, setAlignment] = React.useState('books');
  const classes = useStyles();

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className={classes.root}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label='text alignment'
      >
        <ToggleButton
          className={classes.buttons}
          value='books'
          onClick={() => setPage('books')}
        >
          ALL BOOKS
        </ToggleButton>
        <ToggleButton
          className={classes.buttons}
          onClick={() => setPage('authors')}
          value='authors'
        >
          ALL AUTHORS
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
