import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup  variant="contained"  color="secondary"       >
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
  );
}

export default App;
