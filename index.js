const express = require('express');
const app = express();

var morgan = require('morgan');
app.use(morgan('combined'));
	
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Hello World listening on port 3000!'));
