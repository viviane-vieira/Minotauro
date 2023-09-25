//config inicial
require('dotenv').config()
const express = require('express')
const mongoose =require('mongoose')

const app = express()





//leitura do json/ middlewares(recurso executado entre as requisições e respostas)
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

// ROTAS DA API
const productRoutes = require('./routes/productRoutes')
app.use('/product',productRoutes)




//rota inicial / endpoint
app.get('/',(req, res)=>{
    //mostrar requisição

    res.json({message:'Bem vindo a Minotauro'})

})
//mongodb+srv://viviane:F@TLFVZq9mdwp92@apicluster.wte5nfb.mongodb.net/bancodaapi?retryWrites=true&w=majority
//F@TLFVZq9mdwp92




//entregar uma porta
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.wte5nfb.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() => {
    console.log("Conectamos ao MongoDB!")
    app.listen(3000)
})
.catch((err) => console.log(err))


