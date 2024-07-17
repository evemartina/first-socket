const socket = io();
const online = document.querySelector('#online');
const offline = document.querySelector('#offline');
const texto = document.querySelector('#texto');
const btnEnv = document.querySelector('#enviar');

socket.on('connect',()=>{
 	// console.log('conecto');
	offline.style.display ='none';
	online.style.display  ='block';

});

socket.on('disconnect',()=>{
	// console.log('se desconecto')
	offline.style.display ='block';
	online.style.display  ='none';
});

socket.on('env-msm',(playload)=>{
	console.log(playload)
})





btnEnv.addEventListener('click',()=>{
	const mensaje = texto.value ;
	const playload={
		mensaje,
		id:'123456sas',
		fecha:new Date().getTime()
	}
	socket.emit('env-msm',playload,(id)=>{
		console.log('desde el server',id)
	})


})