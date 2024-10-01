const mongoose = require('mongoose')
const { Schema } = mongoose;


const userSchema = new Schema({
    firstName: { type: String, required: true , maxLength:15 },
    lastName:{ type:String, maxLength:15},
    email: {
        type: String, unique: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: props => `${props.value} is not a valid email !`
        },
        required: true
    },
    password: { type: String, minLength: 6, required: true },
    token: String
});

exports.User = mongoose.model('User', userSchema)