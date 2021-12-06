const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const DB_URI = config.get('mongoURI');
const app = express();
const PORT = config.get('port');

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

const start = async () => {
    try{
        await mongoose.connect(DB_URI);
        app.listen(PORT, () => {console.log(`Server started port ${PORT}`)});
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
}

start();