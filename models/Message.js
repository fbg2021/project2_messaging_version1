require('./db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const messageSchema = new Schema({
    //_id: Schema.Types.ObjectId,
    // conversation:{ 
    //     type:Schema.Types.ObjectId, ref: 'conversation',
    // }, 
    fromUser:{ 
        type:Schema.Types.ObjectId, ref: 'user'
    },
    toUser:{ 
        
        type:Schema.Types.ObjectId, ref: 'user'
    },
    message:{
        type: String,
    required: true
    },
    time_stamp: String
    


})

module.exports =  mongoose.model('Messages', messageSchema, 'messages')