let dia = parseInt(prompt('Escribe un numero para referirte a un dia de la semana, entre el 1 y 7'));

switch(dia){
    case 1:
        console.log('Lunes')
        break;
    case 2:
        console.log('Martes')
        break;
    case 3:
        console.log('Miercoles')
        break;
    case 4:
        console.log('Jueves')
        break;
    case 5:
        console.log('Viernes')
        break;
    case 6:
        console.log('Sabado')
        break;
    case 7:
        console.log('Domingo')
        break;
    default:
        console.log('El valor ingresado no representa un dia valido')
        break;
}