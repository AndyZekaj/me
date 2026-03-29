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



const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send(`Server is runing.`)
});

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));