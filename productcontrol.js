const users = []
const getcontrol = (req,res)=>{
    res.status(200).json({
        message : `List Of All Products`,
        data : users
    })
}
const getid = (req,res)=>{
    for(let x of users)
    {
        if(x.id == req.params.id)
        {
            res.status(200).send(`Id with Product is ${x.name}`)
        }
    }
    res.status(404).send(`Product Not Found ...`)
}
const postcontrol = (req,res)=>{
    let obj = {
        id : users.length +1,
        name : req.body.name
    }
    users.push(obj)
    res.status(201).json({
        message : `new Product has been Added`,
        data : obj
    })
}
module.exports = {getcontrol,getid,postcontrol}