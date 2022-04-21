const jwt = require('jsonwebtoken')
const userRepos = require('../repositories/userRepos')
const cryptoUtils = require('../utils/cryptoUtils')
const alreadyExist = (e) => {
    e.message && e.message.indexOf("duplicate key") > -1
}
const haveValidationErr = (e) => {
    e._message === 'apiUsers validation failed'
}


const handleErrors = (e, res) => {
    if (alreadyExist) {
        res.status(409).send('user already exists')
    } else if (haveValidationErr) {
        res.status(400).json(e.errors)
    } else {
        res.status(500).send('internal server error')
    }
}

const register = async (req, res) => {
    try {
        const data = req.body;
        data.password = await cryptoUtils.getHash(data.password)
        data.createdAt = Date.now()
        await userRepos.add(data)
        res.status(200)
        res.send("successfully signedup")
    } catch (e) {
        handleErrors(e, res)
    }
}

const addRecruiter = async (req, res) => {
    try {
        const user = req.body;
        user.password = await cryptoUtils.getHash(user.password)
        user.createdAt = Date.now()
        user.role = 1;
        await userRepos.add(user)
        res.status(201).send()
    }catch(e){
        //handleErrors(e)
        console.log(e)
    }
}


const update = async (req, res) => {
    try {
        const email = req.params.email;
        await userRepos.update(email, req.body)
        res.status(201).send('updated')
    } catch (e) {
        console.log(e)
        res.status(500)
        res.send('internl server error')
    }
}


const getUser = async (req, res) => {
    try {
        const pageIndex = + req.params.page || 0;
        const pageSize = + req.params.size || 10;
        const options = {
            name: req.query.name || '',
            degree: + req.query.degree,
            qualification: + req.query.qualification,
            skills: req.query.skills,
            sort: req.query.sort,
            sortDir: + req.query.sortDir || 1

        }
        const totalRecord = await userRepos.getUserCount(options)
        const totalPages = Math.ceil(totalRecord / pageSize)
        const users = await userRepos.getUser(pageIndex, pageSize, options)

        const responose = {
            users,
            metaData: {
                totalRecord,
                totalPages
            }
        }

        res.status(200)
        res.json(responose)

    } catch (e) {
        console.log(e)
        res.status(500).send('internal server error')
    }
}

const getUserbyEmail = async (req, res) => {
    const email = req.params.email;
    const user = await userRepos.getUserByEmail(email)
    res.status(200).send(user)
}

const signin = async (req, res) => {
    const payLoad = req.body
    const dbUser = await userRepos.getUserByToken(payLoad.email)
    if (! dbUser) {
        res.status(401).send('unauthorise')
        return
    }
    const result = await cryptoUtils.comparePwd(payLoad.password, dbUser.password)
    if (result) {
        const token = cryptoUtils.generateToken(dbUser)
        res.status(201)
        res.send(token)

    } else {
        res.status(401)
        res.send('unauthorise')
    }

}

module.exports = {
    register,
    update,
    getUser,
    getUserbyEmail,
    signin,
    addRecruiter
}
