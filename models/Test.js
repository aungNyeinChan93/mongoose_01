import { Schema, model } from 'mongoose'

const testSchema = new Schema({
    name: { type: Schema.Types.String, required: true },
    email: { type: Schema.Types.String, required: true, unique: true },
    phone: { type: Schema.Types.Number }
});

// testSchema.index({ email: 1 }, { unique: true })

const Test = model('Test', testSchema, 'tests');

export default Test;