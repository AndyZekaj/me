import { useState, useContext } from "react";

import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from "@mui/material";

import { CopyToClipboard } from "react-copy-to-clipboard";

import AssignmentIcon from "@mui/icons-material/Assignment";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneDisabledIcon from "@mui/icons-material/PhoneDisabled";

import { SocketContext } from "../../context/SocketContext";

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <Container
      sx={{
        width: { xs: "80%", md: "600px" },
        margin: "35px 0",
        padding: 0,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: "10px 20px",
          border: "2px solid black",
        }}
      >
        <form
          noValidate
          autoComplete="off"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Grid container sx={{ width: "100%" }}>
            <Grid item xs={12} md={6} sx={{ p: "20px" }}>
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <CopyToClipboard text={me}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<AssignmentIcon fontSize="large" />}
                  sx={{ mt: "20px" }}
                >
                  Copy your ID
                </Button>
              </CopyToClipboard>
            </Grid>

            <Grid item xs={12} md={6} sx={{ p: "20px" }}>
              <Typography gutterBottom variant="h6">
                Make a call
              </Typography>
              <TextField
                label="ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
              />

              {callAccepted ? (
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  startIcon={<PhoneDisabledIcon fontSize="large" />}
                  onClick={leaveCall}
                  sx={{ mt: "20px" }}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<PhoneIcon fontSize="large" />}
                  onClick={() => callUser(idToCall)}
                  sx={{ mt: "20px" }}
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;