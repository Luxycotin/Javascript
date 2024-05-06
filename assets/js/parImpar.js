let numero = parseInt(prompt('Ingrese un numero'));

if ( Math.abs(numero) %2===0){
    console.log('Es un numero par')
} else if( Math.abs(numero) %2===1){
    console.log('Es un numero impar')
}else if(numero!=Number){
    console.log('Error')
}