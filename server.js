const express    = require('express'),
      bodyParser = require('body-parser'),
      mongoose   = require('mongoose');
      app        = express();
      db         = mongoose.connect('mongodb://localhost/swag-shop');   

const Product  = require('./model.products'),
      WishList = require('./model/whishlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const PORT = 3000;
const APP_NAME = 'Swag Shop API'

app.listen(PORT, () => {
    console.log(`${APP_NAME} running on port ${PORT}...`);
});

app.get('/', (req, res) => {
    res.send('<h1>Root roue</h1>');
    console.log('Root route hit');
});


app.get('*', (req, res) => {
    res.send('<h1>What are you doing with your life?<h1>');
    console.log('A non page was hit!')
});