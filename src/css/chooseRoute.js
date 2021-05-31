import { makeStyles, styled } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
  container: {
    padding: '1rem 2rem',
    '& h1': {
      textAlign: 'center',
      fontSize: 37,
    },
  },

  continueButton: {
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
}));

export const Wrapper = styled('section')({
  display: 'grid',
  '@media (min-width : 800px)': {
    gridTemplateColumns: '1fr 1fr',
  },
});
