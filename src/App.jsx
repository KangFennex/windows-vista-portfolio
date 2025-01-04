import './App.scss';
import { useState } from "react";
import Desktop from './components/desktop/Desktop';
import Taskbar from './components/taskbar/Taskbar';



function App() {
  const [displayMsn, setDisplayMsn] = useState(false);

  const handleDisplayApp = (app)=> {
    if (app === "MSN") {
      setDisplayMsn(!displayMsn)
    } else return
  }
  
  return (
    <>
    <div className="App">
      <Desktop 
      handleDisplayApp={handleDisplayApp}
      displayMsn={displayMsn}
      />
      <Taskbar 
      handleDisplayApp={handleDisplayApp}
      />
      </div>
    </>
  )
}

export default App
