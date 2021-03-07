var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.send({greeting: "Post Page"});
});

module.exports = router;