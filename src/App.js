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
      <div className="App">
        <header className="App-header">
        <ButtonStyled>Test Styled Button</ButtonStyled>
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
    </ThemeProvider>
  );
}

export default App;
