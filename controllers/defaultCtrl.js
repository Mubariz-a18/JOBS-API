function get(req,res){
    res.json("Node api")
    res.status(201)
}

function health(req,res){
    res.json({health:"up"})
    res.status(201)
}

module.exports = {get,health}