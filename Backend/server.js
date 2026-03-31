import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from "http"
import { Server } from "socket.io"

dotenv.config();

const app = express()

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});



const PORT = process.env.PORT || 5002;

app.get("/", (req, res) => {
    res.send(`Server is runing.`)
});

io.on("connection", (socket) => {
    socket.emit("me", socket.id);

    socket.on("disconnect", () => {
        socket.broadcast.emit("callended");
    });

    socket.on("calluser", ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("calluser", { signal: signalData, from, name });
    })

    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal);
    })
});



server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));