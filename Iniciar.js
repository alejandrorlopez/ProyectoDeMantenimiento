//let IYone = document.getElementById("Yone");

const sonido = document.getElementById('Sonido');

document.addEventListener('keydown', function (evento) {
    if(evento.keyCode == 32){
        sonido.innerHTML += '<audio src="Musica de fondo.mp3" autoplay></audio>'
    }
})
