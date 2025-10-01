const users = []
const getcontrol = (req,res)=>{
    res.status(200).json({
        message : `List Of All Items in the Cart`,
        data : users
    })
}
const getid = (req,res)=>{
    for(let x of users)
    {
        if(x.id == req.params.id)
        {
            res.status(200).send(`Id with Item in Cart is ${x.name}`)
        }
    }
    res.status(404).send(`Item Not Found in the Cart...`)
}
const postcontrol = (req,res)=>{
    let obj = {
        id : users.length +1,
        name : req.body.name
    }
    users.push(obj)
    res.status(201).json({
        message : `Item Added to the Cart`,
        data : obj
    })
}
module.exports = {getcontrol,getid,postcontrol}