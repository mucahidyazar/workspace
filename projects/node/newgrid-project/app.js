const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

const indexRouter = require('./router/indexRouter');
app.use(indexRouter);
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log('Server is listening on the port number ' + port );
});