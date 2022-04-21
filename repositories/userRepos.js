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

const getUser = (pageIndex, pageSize, options) => {
    const {name,degree,qualification,skills} = options
    const filter = {
        $or:[
            {firstName:{$regex:name,$options:'i'}},
            {lastName:{$regex:name,$options:'i'}}
        ]
    }
    if(degree) filter.degree = degree
    if(qualification) filter.qualification = qualification
    if(skills){
        const splitArr = skills.split(',')
        filter.skills = {$all:(splitArr)};
    } 
        const skipRows = (pageIndex * pageSize)
    const projection = {
        _id: 0,
        __v: 0,
        password: 0
    }
    var sort =options.sort ? {[options.sort]:options.sortDir}: {updatedAt : -1}

    return userModel.find(filter, projection).collation({'locale':'en'}).sort(sort).skip(skipRows).limit(pageSize)
}

const getUserCount = (options) => {
    const {name,degree,qualification,skills} = options
    const filter = {
       $or:[
        {firstName:{$regex:name,$options:'i'}},
        {lastName:{$regex:name,$options:'i'}}
       ]
    }
    if(degree)  filter.degree = degree
    if(qualification)  filter.qualification = qualification
    if(skills){
        const splitArr = skills.split(',')
        filter.skills = {$all:splitArr};
        console.log(filter.skills)
    } 

    
    
    return userModel.count(filter)
}


const getUserByEmail = (email) => {
    const filter = {
        email: email
    }

    const projection = {
        _id: 0,
        __v: 0,
        password: 0
    }
    return userModel.findOne(filter, projection)
}

const getUserByToken =(email)=>{
    const projection = {password:1,role:1,email:1}
    return userModel.findOne({email},projection)
}

module.exports = {
    add,
    getUser,
    update,
    getUserByEmail,
    getUserCount,
    getUserByToken
}
