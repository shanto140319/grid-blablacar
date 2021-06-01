import { Box, styled, Typography } from '@material-ui/core';
import React from 'react';
import TextField from '@material-ui/core/TextField';
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import StaticDatePicker from '@material-ui/lab/StaticDatePicker';

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
}));
const DeaprtureDate = () => {
  const [value, setValue] = React.useState(new Date());
  const classes = useStyles();
  return (
    <Wrapper>
      <Box className={classes.container}>
        <Typography variant='h1'>When are you going?</Typography>
      </Box>

      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs='desktop'
          openTo='year'
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider> */}
    </Wrapper>
  );
};
const Wrapper = styled('section')({});
export default DeaprtureDate;
