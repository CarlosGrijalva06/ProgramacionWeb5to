const express = require ("express");
const app = express();
app.use(express.json());
app.use(express.text());


app.get('/administracion',(req,res)=>{
    console.log(req.query)
    res.send('Servidor contestando a peticion query GET')
    
});

app.get('/maestros',(req,res)=>{
    console.log(req.body)
    res.send('Servidor constestando a peticion body GET')
    
});

app.get('/estudiantes/:carrera',(req,res)=>{
    console.log(req.params.carrera)
    console.log(req.query.control)
    res.send('Servidor contestando a peticion params GET')
    
});
//localhost:8000/estudiantes/sistemas?control=22100235

app.listen(8000,()=>{
    console.log(`Escuchando en el puerto : ${8000}`)
});