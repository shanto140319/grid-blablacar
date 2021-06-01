import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import React from 'react';
import comfort from '../images/comfort.PNG';
import { BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
//styles
import { makeStyles } from '@material-ui/core/styles';

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
const Comfort = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <Box className={classes.container}>
        <Box display='flex' justifyContent='center'>
          <img
            style={{ width: '200px', height: '200px' }}
            src={comfort}
            alt=''
          />
        </Box>
        <Box className={classes.content}>
          <Typography variant='h1'>
            Keep the middle seat empty so that your passengers are comfortable
          </Typography>
          <ul className={classes.item}>
            <li
              className={classes.list}
              style={{ borderBottom: '1px solid #ddd' }}
            >
              <Link to='/offer/seats'>
                <span>Yes, sure!</span>
                <BsChevronRight />
              </Link>
            </li>

            <li className={classes.list}>
              <Link to='/offer/seats'>
                <span style={{ color: '#222' }}>No, I'll squeeze in 3</span>
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
export default Comfort;
