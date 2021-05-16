const mongoose = require('mongoose');

const localMongoUrl = "mongodb://localhost:27017/messages"

mongoose.connect( localMongoUrl, {
    useNewUrlParser:true, useUnifiedTopology:true
})
const db = mongoose.connection

db.once('open', (_) =>
  console.log('MongoDB is now connected:',localMongoUrl)
);
db.on('error', (err) => console.error('MongoDB connection error!', err));