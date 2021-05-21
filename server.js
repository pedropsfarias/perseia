const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.text());

app.use(express.static('public'));

app.post('/api/:test', (req, res) => {

    const test = req.params.test || 'desconhecido';
    const file = test + '.csv';

    fs.open(file, 'a', 777, function (e, id) {
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