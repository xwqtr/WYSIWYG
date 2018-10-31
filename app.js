const express = require('express');
const app = express();
var zip = new require('node-zip')();


app.use(express.static(__dirname + '/src'));
app.get('/',(req,res)=> {
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
app.get("/zip",(req,res)=> {
  res.set('Content-Type',"application/x-bzip");
  var options = {
    root: __dirname + '/src/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  
  zip.file("page.zip", req);
  zip.generate({type:"blob"});

})
const port =process.env.PORT||3000;
app.listen(port,()=>console.log('Listening on port ' + port));

