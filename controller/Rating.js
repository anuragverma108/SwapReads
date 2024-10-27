import Rating from "../models/Rating.js";


// Function to submit rating
const submitRating = async (req, res) => {
  const { rating, feedback } = req.body;

  // Validate rating
  if (!rating || rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Rating must be between 1 and 5" });
  }

  try {
    const newRating = new Rating({
      rating,
      feedback,
    });

    await newRating.save();
    res.status(201).json({ message: "Rating submitted successfully", data: newRating });
  } catch (error) {
    console.error("Rating submission error:", error);
    res.status(500).json({ message: "Could not submit rating" });
  }
};

export default submitRating