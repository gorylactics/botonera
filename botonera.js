'use strict'

window.addEventListener('load' , function () {
   
    var positivo = document.querySelector('#positivo');
    var negativo = document.querySelector('#negativo');
    var contador = document.querySelector('#contador'+ 1);  
    var likes = 1 + contador ;

    positivo.addEventListener('click', function(){
        // console.log('boton apretado')
        // console.log(contador ++)
       
        if(likes == 1){
            console.log(' es cierto')
        }else{
            console.log('no es verdad' , contador++)
        }
        
        
    });

});



