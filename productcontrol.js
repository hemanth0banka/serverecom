const service = require("../services/productservice.js")
const users = []
const getcontrol = (req,res)=>{
    res.status(200).json({
        message : `List Of All Products`,
        data : users
    })
}
const getid = (req,res)=>{
    const a = service.fetchid(req.params.id,users)
    if(a==404) res.status(404).send(`Product Not Found ...`)
    else    res.status(200).send(`Id with Product is ${a}`)
}
const postcontrol = (req,res)=>{
    const a = service.postservice(req,users)
    res.status(201).json({
        message : `new Product has been Added`,
        data : a
    })
}
module.exports = {getcontrol,getid,postcontrol}