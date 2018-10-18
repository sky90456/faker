
const path = require('path');
const publicPath = path.join(__dirname, './public');
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')
const port = process.env.PORT || 3000
const { getRandomItem } = require('./model/tw-random')

// const { getRandomAddress } = require('./model/tw-random.js')
const { attack } = require('./model/fake.js')


const { getProxyList } = require('./crawler/crawlerproxy.js')

let currentProxyList = [] 

const users = {}
const intervalIds = {}


var app = express();
var server = http.createServer(app)
var io = socketIO(server)


app.use(express.static(publicPath))


io.on('connection', (socket) => {
  console.log('Server Log : New user connected')

  socket.on('hello', (params) => {
    //一旦有A連線,對A發送 welcome
    socket.emit('hi', { socketId: socket.id})
  })


  socket.on('deaction', async (data) => {

    if (intervalIds[socket.id]) {
      clearInterval(intervalIds[socket.id])
    }

    delete users[socket.id]
  })

  socket.on('action', async (data) => {
    
    const haveId = users[socket.id]
    if (haveId) {
      return
    }
    users[socket.id] = 'ok'
    goAttack(socket)
  })

  //user離開網頁後
  socket.on('disconnect', () => {
    delete users[socket.id]

  })

})

server.listen(port, () => {
  console.log(`server is up on port: ${port}`)
})


getProxyList().then(results => {
  currentProxyList = results
})









const goAttack = (socket) => {
  let count = 1
  const stillHave = users[socket.id]
  
  var id = setInterval(() => {
    

    if (!stillHave) {
      clearInterval(intervalIds[socket.id])
    }else {

      //get random proxy 
      const proxy = getRandomItem(currentProxyList)

      attack(proxy).then(result => {

        if (result === 'ok') {
          socket.emit('loop', { type: 'btn typed', number: count ,error:''})
          count++
        }else {
          socket.emit('loop', { type: 'btn typed', number: count, error: result })
        }

      })
      
    }

    

  }, 3000);

  intervalIds[socket.id] = id


}



















