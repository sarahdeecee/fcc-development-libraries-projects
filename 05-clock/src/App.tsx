import './App.css';
import { Grid, Typography } from '@mui/material';
import Modifier from './components/Modifier';
import Controls from './components/Controls';
import Timer from './components/Timer';
import { useEffect, useRef, useState } from 'react';

interface Session {
  minutes: number
  seconds: number
}

const defaultSessionLengths = {
  break: {
    minutes: 5,
    seconds: 0,
  },
  session: {
    minutes: 25,
    seconds: 0,
  }
}

function App() {
  const [play, setPlay] = useState<boolean>(false);
  const [type, setType] = useState<string>("session");
  const [session, setSession] = useState<{break: Session, session: Session}>(defaultSessionLengths)
  const [timeLeft, setTimeLeft] = useState<Session>(session.session);
  const beepRef = useRef<HTMLAudioElement>(null);
  
  const playAlarmSound = () => {
    console.log('play alarm');
    if (beepRef.current) {
      beepRef.current.play();
    }
  }
  const stopAlarmSound = () => {
    if (beepRef.current) {
      beepRef.current.currentTime = 0;
      beepRef.current.pause();
    }
  }
  const capitalizedType = type[0].toUpperCase() + type.slice(1,type.length);

  const handleTimerDone = () => {
    // Change from session to break or break to session, reset timer
    if (type === 'session') {
      setType('break');
      setTimeLeft({...timeLeft, minutes: session.break.minutes, seconds: 0})
    } else if (type === 'break') {
      setType('session');
      setTimeLeft({...timeLeft, minutes: session.session.minutes, seconds: 0})
    }
  }

  const calculateTimeLeft = (currentTime: Session) => {
    if (currentTime) {
      if (currentTime.seconds === 0) {
        if (currentTime.minutes === 0) {
          // timer completed
          return {...currentTime, minutes: 0, seconds: 0};
        } else {
          return {...currentTime, minutes: currentTime.minutes - 1, seconds: 59};
        }
      } else {
        return {...currentTime, seconds: currentTime.seconds - 1};
      }
    } else {
      return {minutes: 0, seconds: 0};
    }
  };

  const resetTimers = () => {
    stopAlarmSound();
    setSession(defaultSessionLengths);
    setType("session");
    setPlay(false);
    setTimeLeft(defaultSessionLengths.session);
  }

  // decrement timer when play
  useEffect(() => {
    if (play) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(timeLeft));
        if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
          handleTimerDone();
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  });
  
  // when timer is complete
  useEffect(() => {
    if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      playAlarmSound()
      handleTimerDone();
    }
  }, [timeLeft]);

  // Increment and decrement times for break and session
  const modifiers = <>
    <Grid item>
      <Modifier type={"break"} currentType={type} play={play} setTimeLeft={setTimeLeft} session={session} setSession={setSession} />
    </Grid>
    <Grid item>
      <Modifier type={"session"} currentType={type} play={play} setTimeLeft={setTimeLeft} session={session} setSession={setSession} />
    </Grid>
  </>

  return (
    <Grid container alignItems="center" justifyContent="center" className="App">
      <Grid container justifyContent="center">
        {modifiers}
      </Grid>
      <Grid item>
        <Typography id="timer-label" variant="h4">{capitalizedType}</Typography>
        <Timer timeLeft={timeLeft} />
        <Controls play={play} setPlay={setPlay} reset={resetTimers} />
      </Grid>
      <audio
        id="beep"
        preload="auto"
        ref={beepRef}
        src="ding-pixabay.mp3"
      />
    </Grid>
  );
}

export default App;
