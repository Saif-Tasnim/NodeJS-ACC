const express = require('express')
const router = express.Router();

router.post("/blog-post" , async(req,res)=>{
    console.log(req.body);

    res.send("blogs post done")
})

module.exports = router