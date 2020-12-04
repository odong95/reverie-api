const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: false,
            unique: true,
            trim: true
        },
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        roles: {
            type: [String],
            required: true
        },
        verified: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps:
        {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

module.exports = mongoose.model('User', UserSchema);