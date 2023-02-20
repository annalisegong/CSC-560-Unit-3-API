var mongoose = require('mongoose');
//schema maps to mongoDB collection and defines the shape of the documents within the collection
var playerSchema = mongoose.Schema({
    //_id:{type: Number, required: true},
    personal_Details:[{
        First_Name: {type: String, required: true},
         Last_Name: {type: String, required: true},
        Grade: {type: String, required: true}}],
    player_Details:[{
        position: {type: String, required: true},
        jersey_number: {type: Number, required: true}}],
    stats:[{
        goals_scored:  {type: Number, required: true},
        assists:  {type: Number, required: true},
        goals_saved:  {type: Number, required: true}}]
});
//converting playerBio schema into model; all models are instances of documents and automtically adds _id property
var Player = module.exports = mongoose.model('player', playerSchema); 
module.exports.get = function(callback, limit)
{
    Player.find(callback).limit(limit);
}