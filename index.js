const express = require ("express")
const cors = require("cors")
const user = require('./db')

const app = express();

app.use(cors())
app.use(express.json())



app.get('/products',(req,res)=>{
    res.send({user})
})

app.post("/products/create",(req,res)=>{
    const {product} = req.body
    user.push(product)
    res.status(200).send("Item got added")
})

app.delete("/products/:id",(req,res)=>{
    let {id}=req.params
    console.log(id)
   user.splice(id+1,1)
    res.status(200).send("Item got deleted")
})



// {
//     "products":{
//         "price":1000
//     }
// }






















app.listen(4000,()=>{
    console.log("Server Started at 4000")
})