const express = require('express');
const app = express();
const fs = require('fs');
const archiver = require('archiver');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    var options = {
        root: __dirname + '/src/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var fileName = './WYSIWYG.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
      });
    
});


app.post('/download-zip-file', function (req, res) {

    var archive = archiver('zip');
    archive.on('error', function (err) {
        res.status(500).send({
            error: err.message
        });
    });

    res.on('close', () => {
        console.log('Archive wrote %d bytes', archive.pointer());
        return res.status(200).send('OK').end();
    });
    res.attachment('page.zip');
    archive.pipe(res);
    archive.append(req.body.pageHtml, {
        name: 'page.html'
    });
    // archive.append(req.body.pageJson, {name: 'page.json'});
    archive.finalize();
});



const port =process.env.PORT||3000;
app.listen(port, ()=>console.log('Listening on port ' + port));
