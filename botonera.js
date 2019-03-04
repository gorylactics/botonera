'use strict'

window.addEventListener('load' , function () {
   
    var positivo = document.querySelector('#positivo');
    var negativo = document.querySelector('#negativo');
    var contador = document.querySelector('#contador');  
    
    positivo.addEventListener('click', function(){
        
        // console.log('boton apretado')
        // console.log(contador)
        document.querySelector('#contador').innerHTML++
        
        
        
    });

    negativo.addEventListener('click' , function () {
        
        // console.log('apretado negativo') 
        // console.log('boton apretado')
        // console.log(contador)
        document.querySelector('#contador').innerHTML--
        
        
    });

    if(contador == Number ){
        console.log('esta funcionando')
    }else{
        console.log(' no es 2')
    }
});

   
    
    
    





