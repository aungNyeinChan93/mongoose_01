import { Schema, SchemaTypes, model } from "mongoose";

const addressSchema = new Schema({
    street: String,
    zipCode: Number
})

const userSchema = new Schema({
    name: { type: String },
    age: {
        type: Number, min: 18, max: 80, validate: {
            validator: (v) => v >= 18,
            message: props => `your age is ${props.value} that not allowed kid!`
        }
    },
    email: { type: String, lowercase: true, unique: true },
    hobies: [String],
    bestFriend: { type: SchemaTypes.ObjectId, ref: 'User' },
    address: addressSchema,
    createAt: { type: Date, default: () => Date.now(), immutable: true },
    updateAt: { type: Date, default: () => Date.now() }
});

const User = model('User', userSchema, 'users')

export default User;
