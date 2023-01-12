const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const indexRouter = require('./router/indexRouter');

app.set('view engine', 'ejs');
app.use(indexRouter);
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('Server is listenin on the port number ' + port);
});


