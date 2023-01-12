const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

//Routers
const indexRouter = require('./router/indexRouter');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(indexRouter);

app.listen(port, () => {
    console.log('Server is started on the port ' + port);
});