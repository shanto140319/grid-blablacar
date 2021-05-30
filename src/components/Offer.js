import { Box, Button, styled, Typography } from '@material-ui/core';
import React from 'react';
import offerImg from '../images/offer.svg';

//styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  left: {
    '& img': {
      marginTop: 25,
      width: '100%',
      height: '350px',
      objectFit: 'cover',
      '@media (max-width: 780px)': {
        height: '136px',
      },
    },
  },
  offerButton: {
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
  right: {
    '& h4': {
      color: 'rgb(5, 71, 82)',
      fontSize: '30px',
      fontWeight: 500,
    },
    '& p': {
      color: 'rgb(112, 140, 145)',
      fontWeight: 500,
    },
  },
}));
const Offer = () => {
  const classes = useStyles();
  return (
    <Ride>
      <Box className={classes.left}>
        <img src={offerImg} alt='' />
      </Box>
      <Box className={classes.right}>
        <Typography variant='h4'>Driving in your car soon?</Typography>
        <Typography>
          Let's make this your least expensive journey ever.
        </Typography>
        <Button className={classes.offerButton}>Offer a ride</Button>
      </Box>
    </Ride>
  );
};
const Ride = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'Wrap',
  paddingLeft: '2rem',
  gap: '2rem 3.5rem',
  maxWidth: '968px',
  margin: '1rem auto',

  '@media (max-width: 980px)': {
    paddingLeft: '0px',
    justifyContent: 'center',
  },
});
export default Offer;
