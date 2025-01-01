import mongoose from "mongoose";

const {Schema, model} = mongoose;

const ItemListSchema = new Schema({
    email: {type: String, required: true},
    title: {type: String, required: true},
    desc: {type: String},
    date: {type: Date, default: Date.now, required: true},
    lastseen: {type: String, default: "Not Provided"},
    photo: {type: String, default: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Chill_guy_original_artwork.jpg/220px-Chill_guy_original_artwork.jpg"},
    type: {type: Boolean, required: true},
    room: {type: String},
    contact: {type: String},
    uname: {type: String}
})

export default mongoose.models.ItemList || model("ItemList", ItemListSchema)