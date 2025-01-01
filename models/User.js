import mongoose from "mongoose";

const {Schema, model} = mongoose;

const UserSchema = new Schema({
    email: {type: String, required: true},
    username : { type: String, required: true},
    room: {type: String},
    contact: {type: String}
})

export default mongoose.models.User || model("User", UserSchema)