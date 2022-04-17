const health = (req,res)=>{
    res.json({health:'up'})
    res.status(200)
}

const home = (req,res)=>{
    res.json('hello node api')
    res.status(204)
}

const defaultCtrl = {
    health,
    home
}

module.exports = defaultCtrl