var express = require('express')

var router = express.Router()
var todos = require('./api/todos.route')


router.use('/todos', todos);


module.exports = router;