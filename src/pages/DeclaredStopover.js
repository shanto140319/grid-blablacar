import { Box, styled, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';
import rocket from '../images/rocket.PNG';
//styles
import { makeStyles } from '@material-ui/core/styles';

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
  middle: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    '& img': {
      height: 35,
      width: '35px',
      objectFit: 'cover',
    },
    '& span': {
      display: 'block',
    },
  },
}));

const DeclaredStopover = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <Box className={classes.container}>
        <Typography variant='h1'>
          Where do you prefer to meet extra passengers?
        </Typography>
        <Box className={classes.middle}>
          <Box>
            <img src={rocket} alt='' />
          </Box>
          <Box>
            <span
              style={{
                color: 'rgb(5, 71, 82)',
                fontSize: '18px',
                lineHeight: '25px',
              }}
            >
              Get more with our Boost technology
            </span>
            <span
              style={{
                color: 'rgb(112, 140, 145',
                fontSize: '16px',
                lineHeight: '20px',
              }}
            >
              Add your preferred stopovers to help Boost find extra passengers
              on your way.
            </span>
          </Box>
        </Box>

        <Box
          display='flex'
          justifyContent='center'
          style={{ marginTop: '2rem' }}
        >
          <Link to='/offer/departure-time'>
            <ButtonComponent />
          </Link>
        </Box>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled('section')({});
export default DeclaredStopover;
