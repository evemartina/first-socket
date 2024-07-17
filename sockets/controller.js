const socketController=(socket)=>{

	console.log('cliente conectado',socket.id)
	socket.on('disconnect',()=>{
		console.log('cliente desconectodo',socket.id)
	})

	socket.on('env-msm',(playload,callback)=>{
		const id = 64644;
		callback(id)

		socket.broadcast.emit('env-msm',playload)
	})
}

module.exports ={
	socketController
}