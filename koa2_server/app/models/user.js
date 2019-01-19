var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
var md5 = require("md5");

var UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created: { type: Date },
  roles: { type: String, required: true }
});

UserSchema.methods.verifyPassword = function(password) {
  var isMatch = md5(password) === this.password;
  return isMatch;
};

mongoose.model("User", UserSchema);