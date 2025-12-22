const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  favouriteGenre: {
    type: String
  }
})
userSchema.set("toJson", {
  transform(document, returnedObject) {
    returnedObject.id = String(returnedObject._id)
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model("User", userSchema)
