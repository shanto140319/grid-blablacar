import React, { useState } from 'react';
import { Box, styled, Typography } from '@material-ui/core';
import { AiOutlineDown } from 'react-icons/ai';

//styles
import { makeStyles } from '@material-ui/core/styles';
import ButtonComponent from '../components/ButtonComponent';
import { Link } from 'react-router-dom';

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
  inputWrapper: {
    marginTop: '60px',
    position: 'relative',
    width: '260px',
    left: '50%',
    transform: 'translateX(-50%)',
    '& svg': {
      color: 'rgb(0, 175, 245);',
      fontSize: 25,
      marginLeft: 10,
    },
  },
  time: {
    position: 'relative',
    width: '100%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4em',
    fontWeight: 700,
    lineHeight: 1,
    fontFamily: 'Roboto',
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'rgb(5, 71, 82)',
    border: '1px solid rgb(221, 221, 221)',
    borderRadius: '2em',
    cursor: 'pointer',
    padding: '7px 3px',
    '&:hover': {
      backgroundColor: '#ededed',
    },
  },
  select: {
    zIndex: 1,
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: ' 100%',
    opacity: 0,
    fontSize: 16,
    appearance: 'menulist-button',
    cursor: 'pointer',
    outline: 'none',
  },
}));
const DepartureTime = () => {
  const classes = useStyles();
  const [time, setTime] = useState('08:00');

  return (
    <Wrapper>
      <Box className={classes.container}>
        <Typography variant='h1'>
          At what time will you pick passengers up?
        </Typography>

        <Box className={classes.inputWrapper}>
          <time className={classes.time}>
            {time} <AiOutlineDown />
          </time>
          <select
            name='departure_time'
            id=''
            className={classes.select}
            onClick={(e) => setTime(e.target.value)}
          >
            <option value='08:00'>08:00</option>
            <option value='00:00'>00:00</option>
            <option value='00:10'>00:10</option>
            <option value='00:20'>00:20</option>
            <option value='01:20'>01:20</option>
          </select>
        </Box>

        <Box
          display='flex'
          justifyContent='center'
          style={{ marginTop: '1rem' }}
        >
          <Link to='/offer/comfort'>
            <ButtonComponent />
          </Link>
        </Box>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled('section')({});
export default DepartureTime;
