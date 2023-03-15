import mongoose from "mongoose"

// Personal Info schema
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  userOwner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
  }
});


export const UserNotes=mongoose.model("usernotes", noteSchema);
