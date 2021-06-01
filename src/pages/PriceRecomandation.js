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
const PriceRecomandation = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.container}>
        <Typography variant='h1'>
          This is our recommended price per seat. OK for you?
        </Typography>
        <Typography>₹1,860</Typography>

        <ul className={classes.item}>
          <li
            className={classes.list}
            style={{ borderBottom: '1px solid #ddd' }}
          >
            <Link to='/offer/profile-picture'>
              <span>Yes, perfect!</span>
              <BsChevronRight />
            </Link>
          </li>

          <li className={classes.list}>
            <Link to='/offer/price-setting'>
              <span style={{ color: '#222' }}>
                No, I need to edit this amount
              </span>
              <BsChevronRight />
            </Link>
          </li>
        </ul>
        <Box display='flex' justifyContent='center'>
          <Link to='/offer/profile-picture'>
            <ButtonComponent />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceRecomandation;
