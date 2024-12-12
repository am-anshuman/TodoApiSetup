function createTodoValidator(req, res, next) {
    if(!req.body.todoText) {
        return res.json({msg: 'Invalid request'});
    }

    // if user is sending everything required
    next();
}

module.exports = {
    createTodoValidator
}