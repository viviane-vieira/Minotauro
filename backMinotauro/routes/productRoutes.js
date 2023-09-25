const router = require('express').Router()
const { json } = require('express')
const Product = require('../models/Product')

//Create - criação de dados
router.post('/', async (req, res)=>{
    //req.body
    const {name, color, price, description, approved} = req.body
    if(!name){
     res.status(422).json({ error: 'o nome é obrigatório!'})
     return
    }
    if(!color){
        res.status(422).json({ error: 'a cor é obrigatória!'})
        return
       }
    if(!price){
     res.status(422).json({ error: 'o valor do produto é obrigatório!'})
     return
    }
    if(!description){
     res.status(422).json({ error: 'a descrição do produto é obrigatória!'})
     return
    }
    
 
    const product = {
     name,
     color,
     price,
     description,
     approved
      
    }
 
  //create no mongoose pra ele criar dados no meu sistema! para ela não falhar eu vou utilizar as seguintes funções.
  try {
     await Product.create(product)
     res.status(201).json({message:'Produto inserido no sistema com sucesso!'})
 
  }catch(error){
     res.status(500).json({error:error})
 
  }
 })


 // Read - leitura de dados
 router.get('/',async (req, res)=>{
    try {
       const products = await Product.find()

       res.status(200).json(products)

        
    } catch (error) {
        res.status(500).json({error: error})
    }
 })

 router.get('/:id', async(req, res)=>{
    //console.log(req)
    //extrair os dados da requisição/ pela url = req.params
    const id = req.params.id
    try {
        const product = await Product.findOne({_id: id})

        if(!product){
            res.status(422).json({message:'Produto não encontrado!'})
            return


        }

        res.status(200).json(product)

        
    } catch (error) {
        res.status(500).json({error: error})
                
    }

 })

 //Update - atualização de dados(PUT, PATCH)

 router.patch('/:id', async(req, res)=>{
    const id = req.params.id
    const {name, color, price, description, approved} = req.body

    const product = {
        name,
        color,
        price,
        description,
        approved,
    }
    try {
        const updateProduct = await Product.updateOne({_id: id},product)
        //console.log(updateProduct)- para verificar como esta atualização


        if(updateProduct.matchedCount === 0){
            res.status(422).json({message:'Produto não encontrado!'})
            return
        }
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({error: error})
        
    

    }

 })
 // Delete - deletar dados
 router.delete('/:id', async (req, res)=>{
    const id = req.params.id
    const product = await Product.findOne({_id: id})

    if(!product){
        res.status(422).json({message:'Produto não encontrado!'})
        return
    }
    try {
        await Product.deleteOne({_id: id})

        res.status(200).json({message:'Produto removido com sucesso!'})
        
    } catch (error) {
        res.status(500).json({error: error})
        
    }


 })

 
 
 
 
 module.exports = router

 