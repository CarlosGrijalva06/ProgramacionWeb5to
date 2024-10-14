function calculararea (base,altura){
    return (base * altura)/2;
}
console.log(calculararea(10,5));


const saludar = function(nombre){
    return `Hola, ${nombre}!`;
};

console.log(saludar("Carlos"));

(function (){
    const mensaje="funcion autoejecutada"
    console.log(mensaje);
})();

const area= (x,y)=>(x*y)/2;
console.log(area(10,5));