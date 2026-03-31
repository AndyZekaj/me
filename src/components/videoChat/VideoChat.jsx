import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import React from 'react'

import Notifications from './Notifications.jsx';
import Options from './Options.jsx';
import VideoPlayer from './VideoPlayer.jsx';


const App = () => {
  return (
    <div className='VCA'>
        <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center">Video Chat</Typography>
        </AppBar>
        <VideoPlayer />
        <Options>
            <Notifications />
        </Options>    
    </div>
  )
}

export default App;