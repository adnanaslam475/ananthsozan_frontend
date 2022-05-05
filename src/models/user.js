const mongoose = require('mongoose')
const validator = require('validator')//for email valiation
const bcrypt = require('bcryptjs')//for pasword hashing
const jwt = require('jsonwebtoken'); //for web token login
const Task = require('../models/task')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    birthday: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    userType: {
        type: String,
        default: 'Master',
        trim: true, required: true,
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    avatar: {
        type: Buffer
    }
},
    {
        timestamps: true,
    })

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: 'email',
    foreignField: 'owner'
})


// userSchema.methods.toJSON = function () {
//     const user = this
//     const userobject = user.toObject()
//     delete userobject.password,
//         delete userobject.tokens
//     return userobject
// }

//instance method document k lye use hot ah
userSchema.methods.generateAuthToken = async function () {
    try {
        const user = this
        console.log('generateAuthToken', process.env.JWT_SECRET)
        const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '7 days' })
        user.tokens = user.tokens.concat({ token })
        await user.save()
        return token
    } catch (error) {
        throw new Error('something went wrong from genrateAuthToken')
    }
}
//static method model k lye use hot ah
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Password is Wrong')
    }
    return user
}


// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

//phle sare task delete phr user dleete
userSchema.pre('remove', async function (next) {
    const user = this
    await Task.deleteMany({ owner: user.email })
    next()
})

const User = mongoose.model('User', userSchema)
module.exports = User