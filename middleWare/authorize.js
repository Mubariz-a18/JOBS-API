const role = {
    candidate:0,
    recruiter:1,
    admin:2
}

const authorizeRecruiter = (req,res,next)=>{
    if(req.role === role.recruiter){
        next()
    }else{
        res.status(403).send("forbidden request")
    }
}
const authorizeAdmin = (req,res,next)=>{
    if(req.role === role.admin) next()
    else res.status(403).send('forbidden ')
}


module.exports = {authorizeAdmin,authorizeRecruiter}