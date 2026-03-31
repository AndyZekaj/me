import { Grid, Typography, Paper } from "@mui/material";
import { useContext } from "react";
import { SocketContext } from "../../context/SocketContext";

const VideoPlayer = () => {

  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <Grid container justifyContent="center">
      {/* Own Video */}
    
            <Paper sx={{ p: 2, m: 2, border: "2px solid black" }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>{name || "Name"}</Typography>
                    <video playsInline muted ref={myVideo} autoPlay style={{ width: "550px" }} />
                </Grid>
            </Paper>
        
      {/* User Video */}
      { callAccepted && !callEnded && (
        <Paper sx={{ p: 2, m: 2, border: "2px solid black" }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call?.name || "User"}
            </Typography>
            <video playsInline ref={userVideo} autoPlay style={{ width: "550px" }} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;