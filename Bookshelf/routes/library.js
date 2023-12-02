const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/create',(req,res,next)=>{
    let library = req.body;
    query = "insert into library (book,author,publish) values(?,?,?)";
    connection.query(query,[library.book,library.author,library.publish],(err,results)=>{
        if(!err){
            return res.status(200).json({message: "Book Added Successfully"});
        }
        else
        return res.status(500).json(err);
    });
});

router.get('/read',(req,res,next)=>{
    var query = "select *from library";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    });
});


router.get('/read/:id',(req,res,next)=>{
    const id = req.params.id;
    var query = "select *from library where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    });
});



router.patch('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let library = req.body;
    var query = "update library set book=?,author=?,publish=? where id=?";
    connection.query(query,[library.book,library.author,library.publish,id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Library id does not found"});
            }
            return res.status(200).json({message:"Library Updated Successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    });
});

router.delete('/delete/:id',(req,res,next)=>{
    const id = req.params.id;
    var query="delete from library where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Library id does not found"});
            }
            return res.status(200).json({message:"Library Deleted Successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    });
});

module.exports = router;