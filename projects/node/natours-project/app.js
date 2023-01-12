const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();
const indexRouter = require('./router/indexRouter');

app.use(indexRouter);
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('Server is started on the port number ' + port);
});