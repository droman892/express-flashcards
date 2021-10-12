const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// to create an express application, just call express()
// the express function returns an express application
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// this line tells which template engine to use
app.set('view engine', 'pug');

app.use((req, res, next) => {
    console.log('Hello');
    next();
});

app.use((req, res, next) => {
    console.log('world');
    next();
});

app.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', {name});
    } else {
        res.redirect('/hello');
    }
});

app.get('/cards', (req, res) => {
    res.render('card', {prompt: 'This is interesting, David'});
});

app.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
})

// set up the development server using the listen method
app.listen(4000, () => {
    console.log('The application is running on localhost: 4000!')
});