import { styled } from '@material-ui/styles';
import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { Box, Typography } from '@material-ui/core';
import returntrip from '../images/returntrip.PNG';
//styles
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '95vw',
    maxWidth: '1016px',
    margin: '1.7rem auto',
    display: 'grid',
    '@media (min-width : 800px)': {
      gridTemplateColumns: '1fr 2fr',
    },
    padding: 0,
  },
  content: {
    '& h1': {
      textAlign: 'center',
      color: 'rgb(5, 71, 82)',
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1.06,
      marginBottom: 32,
      marginLeft: '24px',
    },
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    cursor: 'pointer',
    border: '3px solid transparent',
    display: 'flex',
    paddingTop: '16px',
    paddingBottom: '16px',
    alignItems: 'center',
    border: '0px',
    background: 'none',
    width: '90%',
    margin: '0 auto',

    '& span': {
      color: 'rgb(0, 175, 245)',
      fontSize: '18px',
      lineHeight: '20px',
    },

    '& a': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
      padding: '.5rem',
    },
    '&:hover': {
      background: '#ededed',
    },
  },
}));
const ReturnTrip = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <Box className={classes.container}>
        <Box display='flex' justifyContent='center'>
          <img
            style={{ width: '220px', height: '200px' }}
            src={returntrip}
            alt=''
          />
        </Box>
        <Box className={classes.content}>
          <Typography variant='h1'>
            Coming back as well? Publish your return ride now!
          </Typography>
          <ul className={classes.item}>
            <li
              className={classes.list}
              style={{ borderBottom: '1px solid #ddd' }}
            >
              <Link to='/offer/comment'>
                <span>Yes, sure!</span>
                <BsChevronRight />
              </Link>
            </li>

            <li className={classes.list}>
              <Link to='/offer/comment'>
                <span style={{ color: '#222' }}>
                  I'll publish my return ride later
                </span>
                <BsChevronRight />
              </Link>
            </li>
          </ul>
        </Box>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled('section')({});

export default ReturnTrip;
