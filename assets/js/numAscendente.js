let n1 = parseInt(prompt('Ingrese el primer número'));
let n2 = parseInt(prompt('Ingrese el segundo número'));
let n3 = parseInt(prompt('Ingrese el tercer número'));

if((isNaN (n1)) || (isNaN(n2)) || (isNaN(n3)));{
    console.log('alguno de los numeros ingresados no es valido');
}
if( n1 >= n2 && n1 >= n3 ){
    if( n2 >= n3 ){
        console.log( n3, n2 ,n1);
    } else{
        console.log(n2, n3, n1)
    }
} else if(n2 >= n1 && n2>=n3){
    if(n1>=n3){
        console.log(n3, n1, n2)
    } else{
        console.log(n1, n3, n2)
    }
} else if (n3 >= n1 && n3 >= n2){
    if(n2 >= n1){
        console.log(n1, n2, n3)
    } else {
        console.log(n2, n1, n3)
    }
}