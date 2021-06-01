import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';
import ButtonComponent from '../components/ButtonComponent';

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
      marginLeft: '24px',
    },
    '& p': {
      textAlign: 'center',
      whiteSpace: 'pre-line',
      color: 'rgb(5, 71, 82)',
      fontSize: '82px',
      lineHeight: '82px',
      fontWeight: 700,
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
const ProfilePic = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.container}>
        <Typography variant='h1'>
          Add your profile picture. Passengers will want to see who you are.
        </Typography>

        <ul className={classes.item}>
          <li
            className={classes.list}
            style={{ borderBottom: '1px solid #ddd' }}
          >
            <Link to='/offer/return-trip'>
              <span>Yes, sure!</span>
              <BsChevronRight />
            </Link>
          </li>

          <li className={classes.list}>
            <Link to='/offer/return-trip'>
              <span style={{ color: '#222' }}>No, Thanks</span>
              <BsChevronRight />
            </Link>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default ProfilePic;
