const express = require('express');
const bodyParser = require('body-parser');

const mainRoutes = require('./routes');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public'));

// Setup view engine
app.set('view engine', 'pug');

// Routes
app.use(mainRoutes);

// Handles not found error
app.use((req, res, next) => {
    const error = new Error('Not Found');

    error.status = 404;
    next(error);
});

// Logs out friendly message for user and developer in console
app.use((error, req, res, next) => {
    console.error('There is something wrong! ' + error.message);
    res.locals.error = error;
    res.status(error.status || 500);
    res.render('error');
});

// Listens port
app.listen(3000, () => {
    console.log('Service is starting on port 3000!');
});