const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.text());

app.get('/', (req, res) => {
    res.send('Perseia API running...')
})

app.post('/', (req, res) => {

    fs.open('data.csv', 'a', 666, function (e, id) {
        fs.write(id, req.body + "\n", null, 'utf8', function () {
            fs.close(id, function () {
                res.send('ok');
            });
        });
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})