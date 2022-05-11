var express = require('express')
var taskController = require('../controllers/dojos')
var router = express.Router()



 
// add task
router.post("/add_task", taskController.add_task)

// lsit all tasks
router.get("/tasks", taskController.get_tasks)
 
// retrieve task by ID
router.get("/tasks/:taskId", taskController.retrieve_task)

// edit task by ID
router.put('/tasks/:taskId', taskController.edittasks)

router.delete('/tasks/:taskId', taskController.deletetask)


module.exports = router