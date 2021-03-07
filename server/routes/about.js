var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.send({greeting: "About Page"});
});

module.exports = router;