const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema(
  {
    url: { type: String, required: [true, "Image URL is required"] },
    title: { type: String, required: [true, "Title is required"] },
    artist: { type: String, required: [true, "Artist is required"] },
    genre: { type: String, required: [true, "Genre is required"] },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [5, "minimum length of 5 characters is required"],
    },
    listingType: { type: String, required: [true, "Listing type is required"] },
    price: { type: Number, required: [true, "Price is required"] },
  },
  { timestamps: true }
);

const Album = mongoose.model("Album", AlbumSchema);

module.exports = Album;
