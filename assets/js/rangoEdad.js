let edad = parseInt(prompt('Escriba su edad'));

if (edad >= 0 && edad <= 12){
    console.log('Su rango de edad, es la de un niño')
} else if(edad >= 13 && edad <= 19){
    console.log('Su rango de edad, es la de un Adolescente')
} else if(edad >= 20 && edad <= 59){
    console.log('Su rango de edad, es la de un adulto')
} else if (edad >= 60 && edad <= 159){
    console.log('Su rango de edad, es la de un adulto mayor')
}  else if (edad >= 160){
    console.log('Su rango de edad, es bastante improbable')
} else if (edad != Number){
    console.log('No se permite nada que no sean números enteros')
}