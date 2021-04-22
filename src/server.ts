import express from 'express'
import socketio from 'socket.io'
import cors from 'cors'
import http from 'http'
import path from 'path'

import { handleSocket } from './handleSocket'

const app = express()

const httpServer = http.createServer(app)
const io = new socketio.Server(httpServer, { cors: { origin: '*' } })
handleSocket(io)

app.use(cors())
app.use(express.static(path.resolve(__dirname, '..', 'public')))

httpServer.listen(3333, () => console.log('Server is running on 3333'))
