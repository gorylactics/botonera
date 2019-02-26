'use strict'

window.addEventListener('load' , function () {
   
    var positivo = document.querySelector('#positivo');
    var negativo = document.querySelector('#negativo');
    var contador = document.querySelector('#contador');  
    var numero1 = 2;
    var numero2 = 4;

    positivo.addEventListener('click', function(){
        
        console.log('boton apretado')
        console.log(contador)
        document.querySelector('#contador').innerHTML++
        
        
    });

    negativo.addEventListener('click' , function () {
        
        console.log('apretado negativo') 
        console.log('boton apretado')
        console.log(contador)
        document.querySelector('#contador').innerHTML--
        
    });

});

   
    
    
    





