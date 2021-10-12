const express = require('express');
const bodyParser = require('body-parser');

// to create an express application, just call express()
// the express function returns an express application
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// this line tells which template engine to use
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', {prompt: 'This is interesting, David'});
});

app.get('/hello', (req, res) => {
    res.render('hello', {name: req.body.username});
});

app.post('/hello', (req, res) => {
    // console.dir(req.body);
    res.render('hello', {name: req.body.username});
});

// set up the development server using the listen method
app.listen(4000, () => {
    console.log('The application is running on localhost: 4000!')
});