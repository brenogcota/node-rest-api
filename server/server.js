const express = require('express');
const app = express();

app.use('/posts', require('./route/posts'));

app.listen(3000);