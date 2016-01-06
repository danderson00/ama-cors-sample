var express = require('express'),
    app = express(),
    mobileApp = require('azure-mobile-apps')({ skipVersionCheck: true })

mobileApp.tables.add('todoitem')
app.use(mobileApp)
app.use(express.static(__dirname + '/static'))
app.listen(process.env.PORT || 3000)
