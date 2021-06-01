import { makeStyles, styled } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: '2rem',
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

  route: {
    marginTop: '2rem',
    borderBottom: '1px solid #ddd',
  },
  single: {
    padding: '0 2rem',
    cursor: 'pointer',
    border: '3px solid transparent',
    position: 'relative',
    display: 'flex',
    paddingTop: '16px',
    paddingBottom: '16px',
    alignItems: 'center',
    border: '0px',
    background: 'none',
    width: '100%',
    justifyContent: 'space-between',
    '&:hover': {
      backgroundColor: '#ededed',
    },
  },
  text: {
    color: 'rgb(5, 71, 82)',
    fontSize: '18px',
    lineHeight: '20px',
  },
  tolls: {
    display: 'block',
    marginTop: '.2rem',
    color: 'rgb(112, 140, 145)',
    fontSize: '16px',
  },
  radio: {
    '& input': {
      fill: 'rgb(0, 175, 245)',
      height: 24,
      width: 24,
      cursor: 'pointer',
    },
  },
}));

export const Wrapper = styled('section')({
  display: 'grid',
  '@media (min-width : 800px)': {
    gridTemplateColumns: '1fr 1fr',
  },
});
