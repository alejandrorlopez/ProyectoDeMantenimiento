const sonido = document.getElementById('Sonido');
const Yone = document.getElementById('Yone');
const OpcionA = document.getElementById('OpcionA');
const OpcionB = document.getElementById('OpcionB');
const Intterfaz = document.getElementById('body');
const Cantidad = document.getElementById('Cantidad');
var Listo ;

OpcionA.addEventListener('click', e=>{
    Yone.innerHTML = 'Hola';
    OpcionA.value = "Estorbas quitate de mi camino";
    OpcionB.value = "¿Como te llamas?";
    OpcionA.addEventListener('click', e=>{
        document.body.style.backgroundImage = "url('Yone2.png')";
        Yone.innerHTML = "(El chico se va muy enojado y te pasa empujando)"
        OpcionA.style.display = 'none';
        OpcionB.style.display = 'none';
    }) 
    OpcionB.addEventListener('click', e=>{
        document.body.style.backgroundImage = "url('Yone4.png')";
        Yone.innerHTML = "Mi nombre es yone un gusto"
        OpcionA.value = "El gusto es mio";
        OpcionB.value = "jaja, que feo nombre";
            
        OpcionA.addEventListener('click', e=>{
            document.body.style.backgroundImage = "url('Yone4.png')";
            OpcionA.style.display = 'block';
            OpcionB.style.display = 'block'; 
            Yone.innerHTML = "¿Y tu como te llamas?"
            OpcionA.value= '(Le dices tu nombre)';
            OpcionB.value = 'A ti que te importa';
            OpcionA.addEventListener('click', e=>{
                document.body.style.backgroundImage = "url('Yone4.png')";
                OpcionA.style.display = 'block';
                OpcionB.style.display = 'block'; 
                Yone.innerHTML = "Que lindo nombre tienes"
                OpcionA.value= 'Claro, no como el tuyo';
                OpcionB.value = 'Muchas gracias la verdad';
                OpcionA.addEventListener('click', e=>{
                    document.body.style.backgroundImage = "url('Yone2.png')";
                    Yone.innerHTML = "(El chico se enoja y se va)"
                    OpcionA.style.display = 'none';
                    OpcionB.style.display = 'none';
                }) 
                OpcionB.addEventListener('click', e=>{
                    document.body.style.backgroundImage = "url('Yone4.png')";
                    OpcionA.style.display = 'block';
                    OpcionB.style.display = 'block'; 
                    Yone.innerHTML = "Bueno te dejo, tengo que ir a comprar"
                    OpcionA.value= 'Claro, nos vemos';
                    OpcionB.value = 'Ah si,¿A donde?';
                    OpcionA.addEventListener('click', e=>{
                        document.body.style.backgroundImage = "url('Yone4.png')";
                        Yone.innerHTML = "(El chico se despide y se va)"
                        OpcionA.style.display = 'none';
                        OpcionB.style.display = 'none';
                    }) 
                    OpcionB.addEventListener('click', e=>{
                        document.body.style.backgroundImage = "url('Yone4.png')";
                        OpcionA.style.display = 'block';
                        OpcionB.style.display = 'block'; 
                        Yone.innerHTML = "O tengo que ir a comprar unas cosas al mercado"
                        OpcionA.value= 'Fijate que yo voy al mismo lugar';
                        OpcionB.value = 'Oh ya veo, bueno nos vemos';
                        OpcionA.addEventListener('click', e=>{
                            document.body.style.backgroundImage = "url('Yone4.png')";
                            OpcionA.style.display = 'block';
                            OpcionB.style.display = 'block'; 
                            Yone.innerHTML = "Oh,¿quieres que vayamos juntos?"
                            OpcionA.value= 'Claro, porque no';
                            OpcionB.value = 'No gracias, que pensara la gente si me ven contigo';

                                OpcionA.addEventListener('click', e=>{
                                    document.body.style.backgroundImage = "url('Buen final.png')";
                                    OpcionA.style.display = 'none';
                                    OpcionB.style.display = 'none'; 
                                    Yone.innerHTML = "(Yone y tu se van al mercado juntos)"
                                    Partedos();
                                }) 
                                OpcionB.addEventListener('click', e=>{
                                    document.body.style.backgroundImage = "url('Yone4.png')";
                                    Yone.innerHTML = "(El chico se despide y se va)"
                                    OpcionA.style.display = 'none';
                                    OpcionB.style.display = 'none';
                                })
                        }) 
                        OpcionB.addEventListener('click', e=>{
                            document.body.style.backgroundImage = "url('Yone4.png')";
                            Yone.innerHTML = "(El chico se despide y se va)"
                            OpcionA.style.display = 'none';
                            OpcionB.style.display = 'none';
                        })
                    })
                })
            }) 
            OpcionB.addEventListener('click', e=>{
                document.body.style.backgroundImage = "url('Yone2.png')";
                Yone.innerHTML = "(El chico se enoja y se va)"
                OpcionA.style.display = 'none';
                OpcionB.style.display = 'none';
            })
        }) 
        OpcionB.addEventListener('click', e=>{
            document.body.style.backgroundImage = "url('Yone2.png')";
            Yone.innerHTML = "(El chico se enoja y se va)"
            OpcionA.style.display = 'none';
            OpcionB.style.display = 'none';
        })

    })

})

OpcionB.addEventListener('click', e=>{
    document.body.style.backgroundImage = "url('Yone2.png')";
    Yone.innerHTML = "¿Perdon?";
    OpcionA.value = "Perdon, le hablaba a la piedra"; 
    OpcionB.value = "No me escuchaste?, ¡Que te quites!"; 
    OpcionA.addEventListener('click', l=>{
        Yone.innerHTML = '¿Cual piedra?';
        OpcionA.value = "Osea a ti, cabeza de piedra"; 
        OpcionA.addEventListener('click', k=>{
            Yone.innerHTML = '(El chico se va muy enojado y te empuja al cesped)';
            OpcionA.value = ""; 
            OpcionB.value = ""; 
        })
        OpcionB.value = "Emmm...La que acabo de patear"; 
        OpcionB.addEventListener('click', k=>
        {
            document.body.style.backgroundImage = "url('Yone4.png')";
            Yone.innerHTML = 'Oh ya vi, perdon por alterarme, crei que me hablabas a mi';
            OpcionA.style.display = 'block';
            OpcionB.style.display = 'block'; 
            OpcionA.value = "Verdad que no entiendes el sarcasmo?Que tonto eres"; 
            OpcionA.addEventListener('click',e=>{
                document.body.style.backgroundImage = "url('Yone2.png')";
                Yone.innerHTML = "(El chico se enoja de nuevo y se va sin decir una palabra mas)"
                OpcionA.style.display = 'none';
                OpcionB.style.display = 'none';
            })
            OpcionB.value = "Claro que no te hablaba a ti, perdon por ser malinterpretada"; 
            OpcionB.addEventListener('click',e=>{
                Yone.innerHTML="Oh no te preocupes, disculpa pero tengo prisa asi que te dejo(El chico sonrie y se va)";
                OpcionA.style.display = 'none';
                OpcionB.style.display = 'none';
            })
        })
    })
    OpcionB.addEventListener('click',l=>{
        Yone.innerHTML = '(El chico se va muy enojado y te empuja al cesped)';
        OpcionA.style.display = 'none';
        OpcionB.style.display = 'none'; 
    })
})



function Partedos(){
    document.addEventListener('keydown', function (evento) {
        if(evento.keyCode == 32){
            document.body.style.backgroundImage = "url('Mercado.jpg')";
            Yone.innerHTML = "(Caminan por un rato, hasta que llegan al mercado)"
                document.addEventListener('keydown', function (evento) {
                    if(evento.keyCode == 32){
                        document.body.style.backgroundImage = "url('Mercado.jpg')";
                        Yone.innerHTML = "Yone: ¿Que compraras?"
                        window.alert("Se te han regalado 100 gemas")
                        Cantidad.innerHTML = "100";
                    }
                })
        }
    })
}