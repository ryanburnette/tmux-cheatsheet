var fs = require('fs');
var path = require('path');
var express = require('express');
var morgan = require('morgan');
var showdown = require('showdown');
var converter = new showdown.Converter();

var app = express();

if (process.env.NODE_ENV == 'production') {
  app.disable('x-powered-by');
}

app.set('view engine','ejs');

app.use(morgan('combined'));

app.get(['/','/index.html'],function (req,res) {
  fs.readFile('./content.md','utf8',function (err,markdown) {
    res.render('index',{
      content: converter.makeHtml(markdown)
    });
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use('/style.css',express.static('./public/style.css'));
  app.use('/script.js',express.static('./public/script.js'));
}
else {
  var httpProxy = require('http-proxy');
  var proxy = httpProxy.createProxyServer({});
  app.all('/javascripts/*',function (req,res) {
    proxy.web(req,res,{target: 'http://localhost:8080/'});
  });
  app.all('/sockjs-node/*',function (req,res) {
    proxy.web(req,res,{target: 'http://localhost:8080/'});
  });
}

if (require.main === module) {
  app.listen(process.env.PORT || 3000);
  console.log('listening on port 3000');
}

module.exports = app;
