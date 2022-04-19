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


module.exports = {
    add,
    update
}
