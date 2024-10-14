for(let a=0; a<+10;a++){
    console.log(a)
}
let b=1
while (b<=20){
    console.log(b);
    b++
}

do{
    console.log(b)
    b++
}
while(b<=20)

let objeto={
    nombre:"Juan",
    Apellido:"Perez",
    Edad:23
}

for(let propiedad in objeto){
    console.log(objeto[propiedad])
}

let array=[1,2,3,4,5]
for(let numero in array){
    console.log(array[numero])
}

let string="Curso de Grafos"
for (let letra in string){
    console.log(string[letra])
}

let Objeto={
    nombre:"Juan",
    Apellido:"Perez",
    Edad:23
}
let Array=[1,2,3,4,5]
Array.forEach(function(elemento){
    console.log(Objeto[propiedad])
})