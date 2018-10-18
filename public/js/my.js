var socket = io();

let socketId

socket.on('connect', function () {
  socket.emit('hello')


})


socket.on('hi', function (data) {
  socketId = data.socketId
  console.log(socketId)

})

socket.on('result', function (data) {
  console.log(data)

})

socket.on('loop', function (data) {

  const {number,error} = data 
  $('#count').html(number)
  
  $('#error').append(`<p>${error}</p>`)
})




socket.on('disconnect', function () {
  console.log('disconnect from server');
})



$('#action').on('click', function (e) {
  e.preventDefault()
  socket.emit('action')
})


$('#deaction').on('click', function (e) {
  e.preventDefault()
  socket.emit('deaction')
})
