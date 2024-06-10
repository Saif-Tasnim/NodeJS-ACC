const express = require("express");
const router = express.Router();


router.post("/post-user", async (req, res) => {
    console.log(req.body);
    
    res.json({
        message: "user created success"
    })
});

module.exports = router;