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
    fontSize: 80,
    fontWeight: 700,
    color: 'rgb(93, 209, 103)',
  },
  button: {
    '& svg': {
      color: 'rgb(0, 175, 245)',
      fontSize: 50,
    },
  },
}));
const PriceSetting = () => {
  const classes = useStyles();
  const [seat, setSeat] = useState(1860);
  const increase = () => {
    setSeat(seat + 1);
  };
  const decrease = () => {
    setSeat(seat - 1);
    if (seat <= 0) {
      setSeat(0);
    }
  };
  return (
    <Box className={classes.container}>
      <Typography variant='h1'>Edit our recommended price per seat</Typography>
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
        <span>₹ {seat}</span>
        <Button className={classes.button} onClick={() => increase()}>
          <BsPlusCircle />
        </Button>
      </Box>
      <Box display='flex' justifyContent='center' style={{ marginTop: '1rem' }}>
        <Link to='/offer/profile-picture'>
          <ButtonComponent />
        </Link>
      </Box>
    </Box>
  );
};

export default PriceSetting;
