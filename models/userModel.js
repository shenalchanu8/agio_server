const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default: false,
    },
    
    watchedNotifications:{
        type:Array,
        default: [] ,

    },
    unseenNotifications:{
        typr:Array,
        default: [],
    },
    
},
{

    timestamps: true
})

const userModel = mongoose.model("User", userSchema); // Use mongoose.model() instead of mongoose.Model()

module.exports = userModel;