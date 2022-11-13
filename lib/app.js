const express = require('express');
const path = require('path');
const app = express();

// Built in middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// App routes
app.use('/cats', require('./controllers/cats'));
app.use('/gangs', require('./controllers/gangs'));
app.use('/planets', require('./controllers/planets'));
app.use('/zodiac', require('./controllers/zodiac'));
app.use('/destinations', require('./controllers/destinations'));
// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
