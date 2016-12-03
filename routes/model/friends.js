var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/snappychat");
autoIncrement.initialize(connection);
var f_schema = mongoose.Schema({
	f_id: {type: Number, required: true, index: true},
	username: String,
	friend_username: String,
	added: String
});
f_schema.plugin(autoIncrement.plugin, {
	model: 'friend',
    field: 'f_id',
    startAt: 2001,
    incrementBy: 1});
var Friends = connection.model("friend", f_schema);
module.exports = Friends;