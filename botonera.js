'use strict'

window.addEventListener('load' , function () {
   
    var positivo = document.querySelector('#positivo');
    var negativo = document.querySelector('#negativo');
    var contador = document.querySelector('#contador');  
    var likes =  contador + 1;

    positivo.addEventListener('click', function(){
        console.log('boton apretado')
        for(likes = 0 ; likes <= 10 ; likes++){
            console.log(likes)
        };
        
    });

});



