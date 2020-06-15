var express = require('express');
var app = express();

app.use(express.static(__dirname));
var server = app.listen(5001, () => {
    console.log('server is listening on port ', server.address().port)
});
