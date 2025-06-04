import { Schema, model } from 'mongoose';

const movieSchema = new Schema({
    name: { type: Schema.Types.String, required: true },
    rating: { type: Number, required: true, min: 1, max: 10 },
    isActive: { type: Boolean },
    money: { type: Number, required: true, validate: v => v > 10 },
    genre: { type: Array },
    comments: [{ value: { type: String }, published: { type: Schema.Types.Date, default: Date.now } }],
    info: {
        director: { type: String },
        releaseYear: { type: Number },
        duration: { type: Number }, // in minutes
        language: { type: String }
    }
});

const Movie = model('Movie', movieSchema, "movies");
export default Movie;