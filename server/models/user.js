const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const { mongoUrl } = require('../config/keys');
const { Schema } = mongoose;
mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new Schema({googleId: 'String'});
userSchema.plugin(findOrCreate);

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
