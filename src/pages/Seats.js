import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';

//icons
import { FiMinusCircle } from 'react-icons/fi';
import { BsPlusCircle } from 'react-icons/bs';

//styles
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '95vw',
    maxWidth: '662px',
    margin: '1.7rem auto',

    padding: 0,
    '& h1': {
      textAlign: 'center',
      color: 'rgb(5, 71, 82)',
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1.06,
      marginBottom: 32,
    },
  },
  buttonWrapper: {
    fontSize: 50,
    fontWeight: 700,
  },
  button: {
    '& svg': {
      color: 'rgb(0, 175, 245)',
      fontSize: 50,
    },
  },
}));
const Seats = () => {
  const classes = useStyles();
  const [seat, setSeat] = useState(3);
  const increase = () => {
    setSeat(seat + 1);
    if (seat >= 4) {
      setSeat(4);
    }
  };
  const decrease = () => {
    setSeat(seat - 1);
    if (seat <= 0) {
      setSeat(0);
    }
  };
  return (
    <Box className={classes.container}>
      <Typography variant='h1'>
        So how many BlaBlaCar passengers can you take?
      </Typography>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        className={classes.buttonWrapper}
        style={{ padding: '0 30px', margin: '4rem 0' }}
      >
        <Button className={classes.button} onClick={() => decrease()}>
          <FiMinusCircle />
        </Button>
        <span>{seat}</span>
        <Button className={classes.button} onClick={() => increase()}>
          <BsPlusCircle />
        </Button>
      </Box>
      <Box display='flex' justifyContent='center' style={{ marginTop: '1rem' }}>
        <Link to='/offer/approval'>
          <ButtonComponent />
        </Link>
      </Box>
    </Box>
  );
};

export default Seats;
