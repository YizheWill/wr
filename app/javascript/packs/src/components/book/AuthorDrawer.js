import React from 'react';
import { makeStyles, Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  list: {
    width: 450,
    padding: 50,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Drawer({ authors }) {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <div
        style={{
          display: 'flex',
          width: 300,
          top: 100,
          right: 0,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <h3 style={{ fontSize: 20, fontWeight: 'bold' }}>
          {authors.length === 1 ? 'Author:' : 'Authors'}{' '}
        </h3>
        {authors.map((author) => (
          <div
            key={author.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '5px 0',
            }}
          >
            <Avatar
              style={{
                backgroundColor: '#444',
                color: 'gold',
                width: 40,
                height: 40,
                marginRight: 10,
              }}
            >
              {author.name
                .split(' ')
                .map((el) => el[0])
                .join('')
                .slice(0, 1)}
            </Avatar>
            <h4
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                textDecoration: 'underline',
                color: 'darkblue',
                cursor: 'pointer',
              }}
              key={author.id}
              onClick={() => history.push('/authors/' + author.id)}
            >
              {author.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
  const anchor = 'right';
  return (
    <div>
      <React.Fragment key={anchor}>
        <Button
          onClick={toggleDrawer(anchor, true)}
          variant='contained'
          style={{ backgroundColor: '#444', color: 'gold', maxWidth: 120 }}
        >
          AUTHOR INFORMATION
        </Button>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
