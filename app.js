const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// to create an express application, just call express()
// the express function returns an express application
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'));

// this line tells which template engine to use
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
    console.log('Hello');
    // const err = new Error('Sorry, but there is no page here.');
    // err.status = 500;
    next();
});

//this middleware creates the error object and hands it off to the error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

// set up the development server using the listen method
app.listen(4000, () => {
    console.log('The application is running on localhost: 4000!')
});