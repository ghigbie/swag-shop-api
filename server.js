const express    = require('express'),
      bodyParser = require('body-parser'),
      app        = express();   

app.use(bodyPArser.json());
app.use(bodyPArser.urlencoded({extended: false}));

app.listen(3000, () => {
    console.log('Swag shop is api is running!!!');
});

app.get('/', (req, res) => {
    res.send('<h1>Root roue</h1>');
    console.log('Root route hit');
});


app.get('*', (req, res) => {
    res.send('<h1>What are you doing with your life?<h1>');
    console.log('A non page was hit!')
});