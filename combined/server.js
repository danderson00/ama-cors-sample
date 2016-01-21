var express = require('express'),
    https = require('https'),
    fs = require('fs'),
    app = express(),
    mobileApp = require('azure-mobile-apps')({ skipVersionCheck: true })

mobileApp.tables.add('todoitem')
app.use(mobileApp)
app.use(express.static(__dirname + '/static'))
//app.listen(process.env.PORT || 3000)

var https_options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};
https.createServer(https_options, app).listen(3000);
