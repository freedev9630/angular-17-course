// routes/users.js
const express = require('express');
let todoData = require('../data/todo');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({data: todoData, totalRecords: todoData.length});
});

router.patch('/:id', (req, res) => {
    const { description } = req.body;
    const id = req.params.id;
    const findIndex = todoData.findIndex(item => item.id === id);
    if (findIndex >= 0) {
        todoData[findIndex] = { ... todoData[findIndex], description};
    }
    res.send(todoData[findIndex] ? todoData[findIndex] : {});
});


router.put('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const findIndex = todoData.findIndex(item => item.id === id);
    if (findIndex >= 0) {
        todoData[findIndex] = {...body, id};
    }
    res.send(todoData[findIndex] ? todoData[findIndex] : {});
});

router.post('/', (req, res) => {
    const body = {...req.body, id: crypto.randomUUID()};
    todoData.push(body);
    res.send(body);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    todoData = todoData.filter(item => item.id !== id);
    res.send({data: todoData, totalRecords: todoData.length});
});

module.exports = router;