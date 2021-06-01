import React, { useState } from 'react';
import { Box, Button, styled, Typography } from '@material-ui/core';
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
  publishButton: {
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
  textarea: {
    minHeight: 150,
    outline: 'none',
    appearance: 'none',
    border: '0px',
    backgroundColor: 'rgb(237, 237, 237)',
    color: 'rgb(5, 71, 82)',
    borderRadius: 20,
    fontSize: '16px',
    lineHeight: '20px',
    width: '90%',
    caretColor: 'rgb(0, 175, 245)',
    padding: '14px',
    margin: '14px 0px',
    boxSizing: 'content-box',
    height: '20px',
  },
}));
const Comment = () => {
  const classes = useStyles();
  const [time, setTime] = useState('08:00');

  return (
    <Wrapper>
      <Box className={classes.container}>
        <Typography variant='h1'>Anything to add about your ride?</Typography>
        <Box>
          <textarea
            className={classes.textarea}
            placeholder="Hello! I'm going to visit my family. I travel with a cat and I have a lot of space in the boot!"
            name='comment'
            maxlength='10000'
            title='Anything to add about your ride?'
          ></textarea>
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          style={{ marginTop: '1rem' }}
        >
          <Link to='/offer/comment'>
            <Button className={classes.publishButton}>Publish ride</Button>
          </Link>
        </Box>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled('section')({});
export default Comment;
