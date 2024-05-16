const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const TodosRoute = require('./routes/todo');

app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

app.use('/todos', TodosRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
