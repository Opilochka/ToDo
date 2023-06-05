const Task = require('../models/CardMod')

module.exports.savMap = async function(req, res){
    const todo = new Task({
        title: req.body.title,
    })
    try {
        await todo.save()
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}