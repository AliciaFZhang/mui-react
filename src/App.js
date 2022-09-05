import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange, green} from '@mui/material/colors';
import 'fontsource-roboto';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const ButtonStyled = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5PX 30px'
})

//change the primary and secondary color
const theme = createTheme({
  typography: {
    h2: {
      fontSize: 24,
      marginBottom: 0,
    }
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    }
  }
});

function CheckboxExample() {
  const [checked, setChecked] = useState(true)
  return (
    <FormControlLabel
      control= {
        <Checkbox
          checked={checked}
          icon={<DeleteIcon/>}
          checkedIcon={<SaveIcon/>}
          onChange={(e)=>setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />}
      label="Testing Checkbox"
    />


  )
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
      <div className="App">
        <header className="App-header">
          <AppBar color="secondary">
            <Toolbar>
              <IconButton>
                <MenuIcon/>
              </IconButton>
              <Typography variant="h6">
                MUI Themeing
              </Typography>
              <Button variant="secondary">
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Typography variant="h2" component="div">
            Welcome to MUI
          </Typography>
          <Typography variant="subtitle1">
            Learn how to use Material Ui
          </Typography>
          <ButtonStyled>Test Styled Button</ButtonStyled>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={3} sm={6}>
              <Paper style={{height: 75, width: '100%'}}/>
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{height: 75, width: '100%'}}/>
            </Grid>
            <Grid item xs={3} lg={12}>
              <Paper style={{height: 75, width: '100%'}}/>
            </Grid>
          </Grid>

          <TextField
            variant="outlined"
            color="secondary"
            type="date"
          />
          <TextField
            variant="outlined"
            color="secondary"
            type="time"
            label="The time"
          />
          <TextField
            type="email"
            label="Email"
            placeholder="test@test.com"
          />
          <CheckboxExample/>
          <ButtonGroup  variant="contained" color="secondary">
            <Button
              startIcon={<SaveIcon />}
              size="large"
            >
              Save
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              size="large"
            >
              DIscard
            </Button>
          </ButtonGroup>

          <img src={logo} className="App-logo" alt="logo" />

        </header>
      </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
