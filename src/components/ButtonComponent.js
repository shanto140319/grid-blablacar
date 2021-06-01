import React from 'react';
import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: '8px',
    backgroundColor: 'rgb(0, 175, 245)',
    color: '#fff',
    padding: '0px 24px',
    border: '1px solid transparent',
    borderRadius: '48px',
    fontSize: '16px',
    fontWeight: 600,
    fontFamily: 'inherit',
    height: '48px',
    minWidth: '48px',

    '&:hover': {
      backgroundColor: '#008fc1',
    },
  },
}));
const ButtonComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.button}>Continue</Button>
    </div>
  );
};

export default ButtonComponent;
