import React from 'react';
import { Box, Button, styled, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
//icons
import { FiSearch } from 'react-icons/fi';
//styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '95vw',
    maxWidth: '662px',
    margin: '0 auto',
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
  wrapper: {
    marginTop: '2.5rem',
    position: 'relative',
    display: 'flex',
    color: 'rgb(5, 71, 82)',
    backgroundColor: 'rgb(237, 237, 237)',
    borderRadius: '16px',
    border: '1px solid rgb(237, 237, 237)',
    boxShadow: 'none',
    height: 55,
    width: '93%',
    margin: '0 auto',
  },
  button: {
    backgroundColor: 'transparent',
    color: 'rgb(112, 140, 145)',
    height: '100%',
    '& svg': {
      fontSize: 20,
    },
  },
  input: {
    border: 'none',
    backgroundColor: 'transparent',
    color: 'rgb(5, 71, 82)',
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: 48,
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0.1,
    width: '100%',
    '&:focus': {
      outline: 'none',
    },
    '&::placeholder': {
      color: '#889191',
    },
  },
}));

const DroffOff = () => {
  const classes = useStyles();
  return (
    <Drop>
      <Box className={classes.container}>
        <Typography variant='h1'>Drop-off</Typography>
        <Box className={classes.wrapper}>
          <Link to='/offer/arrival-precise'>
            <Button className={classes.button}>
              <FiSearch />
            </Button>
          </Link>
          <input
            className={classes.input}
            type='search'
            placeholder='e.g. Manchester Picadilly'
            name='departure_place'
          ></input>
        </Box>
      </Box>
    </Drop>
  );
};
const Drop = styled('section')({
  padding: '2rem 0',
  height: '100vh',
});
export default DroffOff;
