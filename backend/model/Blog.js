import mongoose from "mongoose";
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],

    },
    image: {
        type: String,
        required: [true, "Image is required"],

    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"],
    },

});
export default mongoose.model("Blog", blogSchema);