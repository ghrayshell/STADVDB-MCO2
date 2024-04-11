const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;

// enables the use of JSON methods
app.use(express.json());

// Create an instance of express-handlebars
const hbs = exphbs.create({
    defaultLayout: false, 
    extname: '.hbs' 
});

// Set handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Defaults to index in the views folder
app.get('/', (req, res) => {
    res.redirect('/index');
});

const router = require('./routes/router.js');
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
