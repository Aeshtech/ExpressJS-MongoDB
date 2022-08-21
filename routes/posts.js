const express = require('express');
const router = express.Router();        //now we can create routes using the router
const Post = require('../models/Post');  //importing model

// Get all posts together
router.get('/',  async (req, res) => {
    try{
        const data = await Post.find();
        res.json(data);
    }catch(e){
        res.send("Error - " + e);
    }
} );



//Sumbit a post
router.post('/', async (req, res)=> {
    const post = Post({             //creating a data obj to save in our db
        title : req.body.title,
        description : req.body.description
    })

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(e){
        res.send("Error - " + e);
    }
} )


//Get a specific post
router.get('/:id', async (req,res) => {
    try{
        let post = await Post.findById(req.params.id);
        res.json(post);
    }catch(e){
        res.json({Error : e});
    }
})


//Delete a specific post
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.json("Successfully Deleted.");
    } catch (error) {
        res.json({error})
    }
})


//update a specific post
router.put('/:id', async (req, res) => { 
    try{
        const post = await Post.findByIdAndUpdate(req.params.id, {title : req.body.title,  description : req.body.description});
        res.json("Successfully Updated.");
    }catch(e){
        res.send("Error " + e);
    }
})

module.exports = router;        


