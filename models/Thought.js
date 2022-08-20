const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            validate: [({ length }) => length > 0 && length <=280, 'Thoughts must be between 1-280 characters.']
        },
        createdAt: {
            type: Date,
            default: Date.now,

        },
        username: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;