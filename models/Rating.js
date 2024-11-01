import mongoose from'mongoose';

const RatingSchema = new mongoose.Schema({
  rating: { type: Number, required: true, min: 1, max: 5 },
  feedback: { type: String, maxlength: 500 },
}, { timestamps: true });

const Rating = mongoose.model('Rating', RatingSchema);
export default Rating;