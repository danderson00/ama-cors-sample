var app = require('express')(),
    mobileApp = require('azure-mobile-apps')({ skipVersionCheck: true })
    
mobileApp.tables.add('todoitem')
app.use(mobileApp)
app.listen(process.env.PORT || 3000)