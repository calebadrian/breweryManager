var mongoose = require('mongoose');
var connectionString = 'mongodb://calebadrian:Btpgg1847@ds014388.mlab.com:14388/brewerymanagement';
var connection = mongoose.connection;

mongoose.connect(connectionString);
connection.on('error', err =>{
    console.log('server error:', err);
});
connection.once('open', ()=>{
    console.log('Connected to Database');
});