const express = require('express')
const app = express()
const port = 4000
var cors = require('cors')
app.use(cors({credentials: true, origin: false}));
const fs = require('fs');
const path = require('path')


const readDirJSONS = (dir) => {
  const result = []
  const jsonsInDir = fs.readdirSync(dir).filter(file => path.extname(file) === '.json');

  jsonsInDir.forEach(file => {
    const fileData = fs.readFileSync(path.join(dir, file));
    const json = JSON.parse(fileData.toString());
    result.push(json)
  });

  return result
}

let interval = null

var server = app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})


const stop = () => {
  clearInterval(interval)
  interval = null
}


const socketIO = require('socket.io')
const io = socketIO(server, { origins: '*:*'})
io.set('origins', '*:*');
io.origins('*:*');

io.on('connection', socket => {
  console.log('script111111')


  socket.on('getOldKRP', () => {
    stop()
    console.log('getOldKRP')
    interval = setInterval(() => {
      let result = readDirJSONS('./jsons/KRP/old')
      console.log('./jsons/KRP/old ', result.length)
      io.sockets.emit('newdata', result)
    }, 5000)
    
  })

  socket.on('getCurrentKRP', () => {
    stop()
    console.log('getCurrentKRP')
    interval = setInterval(() => {
      let result = readDirJSONS('./jsons/KRP/current')
      console.log('./jsons/KRP/current ', result.length)
      io.sockets.emit('newdata', result)
    }, 5000)
    
  })

  socket.on('getNewKRP', () => {
    stop()
    console.log('getNewKRP')
    interval = setInterval(() => {
      let result = readDirJSONS('./jsons/KRP/new')
      console.log('./jsons/KRP/new' , result.length)
      io.sockets.emit('newdata', result)
    }, 5000)
    
  })

  socket.on('getZonaA', () => {
    stop()
    console.log('getZonaA')
    interval = setInterval(() => {
      let result = readDirJSONS('./jsons/storageplace/a')
      console.log('./jsons/storageplace/a ', result.length)
      io.sockets.emit('newdata', result)
    }, 5000)
    
  })

  socket.on('getZonaB', () => {
    stop()
    console.log('getZonaB')
    interval = setInterval(() => {
      let result = readDirJSONS('./jsons/storageplace/b')
      console.log('./jsons/storageplace/b ', result.length)
      io.sockets.emit('newdata', result)
    }, 5000)
    
  })

  socket.on('getZonaC', () => {
    stop()
    console.log('getZonaC')
    interval = setInterval(() => {
      let result = readDirJSONS('./jsons/storageplace/c')
      console.log('./jsons/storageplace/c' , result.length)
      io.sockets.emit('newdata', result)
    }, 5000)
    
  })
})
