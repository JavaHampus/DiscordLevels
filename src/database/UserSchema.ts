import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    userId: {
        type: String,
        required: true,
    }, 
    level: {
        type: Number,
        required: true,
    },
    xp: {
        type: Number,
        required: true,
    }
});

module.exports = model('User', UserSchema);