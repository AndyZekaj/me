import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home.jsx'
import VideoChat from "./components/videoChat/VideoChat.jsx"

import { ContextProvider } from './context/SocketContext.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
      {/* <Home /> */}
      <VideoChat />
  </ContextProvider>,
)
