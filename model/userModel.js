const mongoose = require('mongoose')

const userModel = mongoose.model("apiUsers", {
    firstName: {
        type: String,
        minLength: [
            3, "minimun 3 charecters"
        ],
        maxLength: [
            100, "maximum 100 charecters"
        ],
        required: [true, 'firstname is required']
    },
    lastName: {
        type: String,
        minLength: [
            3, "minimun 3 charecters"
        ],
        maxLength: [
            100, "maximum 100 charecters"
        ],
        required: [true, 'lastname is required']
    },
    gender: Number,
    active: {
        type: Boolean,
        default: true
    },
    email: {
        type: String,
        unique: true,
        required: [
            true, "email is required"
        ],
        validate: {
            validator: v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v),
            message: 'email is not valid'
        }
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    mobile: {
        type: String,
        validate: {
            validator: (v) => /[0-9]{10}/.test(v),
            message: 'invalid phone number'
        }
    },
    qualification: Number,
    degree: Number,
    skills: [String],
    passOut: Number,
    image: String,
    resume: String,
    createdAt: Date,
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports = userModel
