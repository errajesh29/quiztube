const Note = require('../models/note.model');

module.exports.create = (req, res)=>{
    //Validate each filed from the request
    console.log('cretaed successfully ');
    if(!req.body.content){
        
        return res.status(400).send({
            message: 'Invalid content'
        });
    }
    const note = new Note( {
        title : !req.body.title || 'Untitled Note',
        content : req.body.content
    })

    note.save()
    .then(note =>{
        res.send(note);
    }).catch(err =>{
        res.status(500).send({message : err.message ||'Some error occured while saving the note'});
    });
    
}

module.exports.findAll = (req, res)=>{
    console.log('find all');
    Note.find()
    .then( notes=>{
        res.send(notes);
    })
    .catch( err=>{
        return res.status(500).send({
            message: err.message || 'Some error occured while retriving the notes.'
        });
    });
}

module.exports.findOne = (req, res)=>{

}

module.exports.update = (req, res)=>{
    console.log('update command');
    //validations
    if(!req.params.noteId){
        return res.status(400).send({message: 'null id'});

    }
    if(!req.body.content){
        
        return res.status(400).send({
            message: 'Invalid content'
        });
    }
    

    Note.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || 'Untitle Note',
        content : req.body.content
    },{new : true})
    .then( note=>{
        if(!note){
            return res.status(400).send({message: 'note not found with id : '+ req.params.noteId})
        }
        res.send(note);
    }).catch(err=>{
        if(err.kind ==='ObjectId'){
            return res.status.status(404).send({
                message : 'Note not found with id : '
            });
        }
        return res.status(500).send({
            message: err.message || 'Some error occured while retriving the notes.'
        });
    })

}

module.exports.delete = (req, res)=>{
    console.log('delete command');
    //validations
    if(!req.params.noteId){
        return res.status(400).send({message: 'null id'});

    }
      
    console.log(req.params.noteId);
    Note.findByIdAndRemove(req.params.noteId)
    .then( note=>{
        console.log(JSON.stringify(note));
        if(!note){``
            return res.status(400).send({message: 'note not found with id : '+ req.params.noteId})
        }
        return res.send({message : 'note deleted successfully'});
    }).catch(err=>{
        if(err.kind ==='ObjectId'){
            return res.status.status(404).send({
                message : 'Unable to delete, note not found with id'
            });
        }
        return res.status(500).send({
            message: err.message || 'Some error occured while retriving the notes.'
        });
    })

}

module.exports.findOne = (req, res)=>{
    console.log('find one command');
    //validations
    if(!req.params.noteId){
        return res.status(400).send({message: 'null id'});

    }
      
    console.log(req.params.noteId);
    Note.findById(req.params.noteId)
    .then( note=>{
        console.log(JSON.stringify(note));
        if(!note){``
            return res.status(400).send({message: 'note not found with id : '+ req.params.noteId})
        }
        return res.send(note);
    }).catch(err=>{
        if(err.kind ==='ObjectId'){
            return res.status.status(404).send({
                message : 'Unable to delete, note not found with id'
            });
        }
        return res.status(500).send({
            message: err.message || 'Some error occured while retriving the notes.'
        });
    })

}