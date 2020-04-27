const Task = require('../models/Task');

module.exports = {

  add: function(req, res){
    let task = new Task(req.body);

    task.save()
  	 .then(task => res.status(200).json(task))
  	 .catch(err => {
  	 	console.log('erro ao cadastrar', err)
  	 });
   },

 getAll: function(req, res){
   Task.find(function (err, tasks){
     if(err){
       res.status(400).send("erro ao listar", err)

     }else{
       res.status(200).json(tasks);
     }

   });

 },

 getById: function(req, res){
   Task.findById(req.params.id, function(err, task){
     if(err){
       res.status(400).send("erro ao buscar", err)

     }else{
       res.status(200).json(tasks);
     }
   });
 },

 delete: function(req, res){
   Task.findByIdAndRemove(req.params.id, function(){
     if(err){
       res.status(400).send("erro ao deletar", err)

     }else{
       res.status(200).json(req.params.id);
     }
   });
 },

 update: function(req, res){
   Task.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(){
     if(err){
       res.status(400).send("erro ao atualizar", err)

     }else{
       res.status(200).json(task);
     }
   });
 }

};
