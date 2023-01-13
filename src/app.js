import cluster from "cluster";
import express from "express";
import os from "os";
import args from "minimist"


const app = express()

const PORT = process.env.PORT || 8080

const modulesCpus = os.cpus().length;

const argumentos = args(process.argv.slice(2), {
    default: {
        modo: "FORK"
    }
})


if(argumentos.modo === "CLUSTER"){
    console.log("Ejecutando en modo Cluster")
    
    if(cluster.isPrimary){
        console.log(`El proceso primario con el PID ${process.pid} ha sido ejecutado`)
        for (let i = 0; i < modulesCpus; i++) {
            cluster.fork();
        }
        cluster.on('exit', (worker) =>{
            console.log(`El proceso con el PID ${worker.process.pid} dejo de funcionar `)
            cluster.fork();
        })
    } else{
        console.log(`El proceso worker con el PID ${process.pid} ha sido ejecutado`)
        app.listen(PORT,()=> console.log(` Escuchando en el puerto ${PORT}`))
    }

} else if (argumentos.modo === "FORK"){
     app.listen(PORT,()=> console.log(` Escuchando en el puerto ${PORT}`))
    console.log("Ejecutando en modo FORK")

} else if (argumentos.modo === "PM2"){
 app.listen(PORT,()=> console.log(` Escuchando en el puerto ${PORT}`))

} 

app.get('/', (req, res) => {
    res.send(`Peticion con PID ${process.pid}`)
})


app.get('/', (req,res) => {
    res.send(`Peticion con PID ${process.pid}`)
    console.log(process.argv.slice(2))
})

app.get('/info', (req,res)=> {
    
    const informacion = {
        procesadores: modulesCpus
    }

    res.send({informacion})

})

app.get('/api/random', (req,res) => {
    
    let result = 0;

    for(let i=0;i<5e9;i++){
        result+=i;
    }

    res.send(`Peticion atendida por el PID ${process.pid}`)
})