const express = require('express');
const app = express();
const port = 7777;
const router = require('./ROUTER/router');
const cookieParser = require('cookie-parser');
const { createServer } = require('node:http');
const cors = require('cors');
const path = require('path');
const mysocket=require('./BUSINESS/socket')
const server = createServer(app);



app.use('/humpydumpy', express.static(path.join(__dirname, 'public', 'humpydumpy')));

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser())

const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/jsfiddleClone';
mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', err => {
    console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});


app.use(express.json())

mysocket(server)
app.use('/', router)

server.listen(port, () => {
    console.log('SERVER STARTED')
})