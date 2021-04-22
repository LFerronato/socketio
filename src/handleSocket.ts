import { Server } from 'socket.io';
import db from './database';

export const handleSocket = (io: Server) => {
  io.on('connection', newSocket => {
    // console.log("New Cnn: ", newSocket.id)

    //  Message in memory
    newSocket.emit('all-messages', db)

    // Receive new message
    newSocket.on('message', msg => {
      db.push({ sender: newSocket.id, message: msg })
      io.emit('all-messages', db)

    })

  })
}
