const tasks = [
  { id: 1, 
    name: 'Python tutorial', 
    is_completed: true },
  { id: 2, 
    name: 'Tips to learn javascript', 
    is_completed: true },
  { id: 3, 
    name: 'Do your assignment easily', 
    is_completed: true },
  { id: 4, 
    name: 'API', 
    is_completed: false },
  { id: 5, 
    name: 'Node, Express, etc', 
    is_completed: false }
]

module.exports = {
    getAll(req, res) {
      res.send(tasks);
    },

    get(req,res) {
        const task = tasks.find(t => t.id === parseInt(req.params.id));
        if(!task) res.status(404).send('There is no task at that id');
        res.send(task)
      },

    post(req,res){
        const task = {
          id: tasks.length +1,
          name: req.body.name,
          is_completed: req.body.is_completed
        };
          
        tasks.push(task);
        res.status(201).send(task);
    }


    


}