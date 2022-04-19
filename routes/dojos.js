const express = require("express");
const dojosController = require("../controllers/dojos");
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


const router = express.Router();

router.get("/blogs", (req, res) => {
  dojosController.getAll(req, res);
});

router.get('/blogs/:id',(req,res) => {
  dojosController.get(req, res);
});

router.post("/blogs", (req, res) => {
    dojosController.post(req, res);
  });

router.put('/blogs/:id',(req,res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if(!task) res.status(404).send('There is no blog at that id');
    
  task.name = req.body.name;
  res.status(204).send('None')
  
  })

router.delete('/blogs/:id',(req,res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if(!task) res.status(204).send('None');
  
  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
  res.status(204).send('None'); 
  })
  
  



module.exports = router;