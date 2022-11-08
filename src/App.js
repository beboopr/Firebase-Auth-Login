import { useState } from 'react'
import Login from './scenes/Login'
import Protected from './scenes/Protected'
import Singup from './scenes/Singup';

function App() {
  const [ user, setUser ] = useState()
  return (
  <>
  { !user
    ? <><Login setUser={setUser} /><Singup setUser={setUser}/></>
    : <Protected />
  }
  </>
  );
}

export default App;
