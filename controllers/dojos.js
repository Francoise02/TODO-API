const postTask = require("../models/dojos");



// Endpoint to add a new task
exports.add_task = async (request, response) => {
  const task = new postTask(request.body);

  try {
    await task.save();
    response.status(200)
   
  } catch (error) {
   
    response.status(500).send({ message: error.toString() })
  }
};

// Retrieve tasks 
exports.get_tasks = async (request, response) => {
  const tasks = await postTask.find({});

  try {
    // response.send(tasks);
  } catch (error) {
    response.status(500).send(error);
  }
};

// Retrieve a task by ID
exports.retrieve_task = async (request, response) => {
  try {
    const taskId = request.params.taskId
    console.log(taskId)
    const task = await postTask.findById({ _id: taskId });


    if (task) {
      return response.status(200).json({
        success: true,
        data: task,
      });
    } else {
      return response.status(404).json({
        success: false,
        message: `There is no task at id: ${taskId}`
      });
    }

  } catch (error) {
    // response.status(500).send(error);
    response.status(500).send({ message: error.toString() });
  }
};



// Edit a task
exports.edittasks = async (request, response) => {
  if (!request.body) {
    response.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = request.params.taskId;

  await postTask.findByIdAndUpdate(id, request.body, { useFindAndModify: false }).then(data => {
    if (!data) {
      return response.status(404).send({
        message: `There is no task at id: ${id}`
      });
    } else {

    
      return response.status(200).send({
        success: true,
        message: "task updated successfully."

      
      })
      return;
    }
  }).catch(err => {
    response.status(500).send({
      message: err.message
    });
  });
};


exports.deletetask = async (request, response) => {
  try {
   
    const taskId = request.params.taskId
    console.log(taskId)

    const task = await postTask.findByIdAndRemove({ _id: taskId });

    if (task) {
  
      console.log("deleted!");

      response.status(204).send({
        message: "Task to delete can not be empty!"
      });
    }

    else {
      return response.status(204).json({
        success: false,
        message: `There is no task at id: ${taskId}`
      })
    }

  } catch (error) {
   
    response.status(500).send({ message: error.toString() });
  }
};



