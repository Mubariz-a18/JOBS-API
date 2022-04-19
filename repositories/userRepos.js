const userModel = require('../model/userModel')


const add = async (userData) => {
    const user = new userModel(userData) // user data coming from usermodel is passed to mongoose
    return user.save() // to save userdata coming from front end use save as inset from mongo db
}

const update = (email, updateData) => {
    const {
        firstName,
        lastName,
        mobile,
        skills,
        degree,
        qualification,
        gender,
        password,
        passout
    } = updateData
    return userModel.updateOne({
        email
    }, {
        $set: {
                firstName,
            lastName,
            mobile,
            skills,
            degree,
            qualification,
            gender,
            password,
            passout,
            updatedAt: Date.now()
        }
    })
}

const getUser = (pageIndex,pageSize)=>{
        const filter={}
        const skipRows =(pageIndex*pageSize)
        const projection = {_id:0,__v:0,password:0}
        return userModel.find(filter,projection).skip(skipRows).limit(pageSize)
}

const getUserCount = ()=>{
        
        return userModel.count()
}


const getUserByEmail = (email)=>{
        const filter = {email:email}
        
       const projection = {_id : 0,__v:0,password:0}
        return userModel.findOne(filter,projection)
}


module.exports = {
    add,
    getUser,
    update,
    getUserByEmail,
    getUserCount
}
