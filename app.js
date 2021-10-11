const express = require('express');

// to create an express application, just call express()
// the express function returns an express application
const app = express();

// this line tells which template engine to use
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/hello', (req, res) => {
    res.send('<h1>hey you!!!! nice to meet you</h1>');
});

// set up the development server using the listen method
app.listen(4000, () => {
    console.log('The application is running on localhost: 4000!')
});