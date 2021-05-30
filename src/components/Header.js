import { Box, styled, Typography } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import React from 'react';
//styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  faq: {
    textTransform: 'uppercase',
    color: 'rgb(0, 175, 245)',
    fontWeight: 500,
  },
  box: {
    width: '95vw',
    maxWidth: 880,
    '& p': {
      color: ' rgb(112, 140, 145)',
      fontSize: 16,
      letterSpacing: '.8px',
      fontWeight: 500,
      marginBottom: 0,
      textAlign: 'left',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <Box className={classes.box}>
        <Typography>
          Coronavirus: for more information about the current situation, please
          read our{' '}
          <a href='#' className={classes.faq}>
            FAq
          </a>
        </Typography>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  minHeight: 55,
  padding: 5,
  width: '100%',
  backgroundColor: '#EDEDED',
  justifyContent: 'center',
});
export default Header;
