const authorizeRecruiter = (req,res,next)=>{
    if(req.role === 1){
        next()
    }else{
        res.status(403).send("forbidden request")
    }
}
const authorizeAdmin = (req,res,next)=>{
    if(req.role === 2) next()
    else res.status(403).send('forbidden ')
}


module.exports = {authorizeAdmin,authorizeRecruiter}