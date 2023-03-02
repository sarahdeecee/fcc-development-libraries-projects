import './App.css';
import { Button, Grid } from '@mui/material';
import Modifier from './components/Modifier';
import Controls from './components/Controls';
import Timer from './components/Timer';

const lengthValues = [
  {
    type: "break",
    minutes: 5,
  },
  {
    type: "session",
    minutes: 25
  }
]

function App() {
  const modifiers = lengthValues.map(length => 
    <Grid item>
      <Modifier type={length.type} minutes={length.minutes} />
    </Grid>)

  return (
    <div className="App">
      <Grid container justifyContent="center">
        {modifiers}
      </Grid>
        <Button id="timer-label">Session</Button>
        <Timer />
        <Controls />
    </div>
  );
}

export default App;
