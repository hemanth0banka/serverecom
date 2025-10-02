const fetchid = (id,users)=>{for(let x of users)
    {
        if(x.id == id)
        {
            return x.name
        }
    }
   return 404}

const postservice = (req,users)=>{
    let obj = {
        id : users.length +1,
        name : req.body.name
    }
    users.push(obj)
    return obj
}

module.exports = {fetchid,postservice}