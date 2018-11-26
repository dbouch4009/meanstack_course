//routes index.js

var express = require('express');
var router = express.Router();

router
    .route('/json')
    .get(function(req, res){  //req = request object, res = response
    console.log('GET json');
    res.status(200);
    res.json({'jsonData':true});  //another express helper method
})
    .post(function(req, res){  //req = request object, res = response
    console.log('POST json');
    res.status(200);
    res.json({'jsonData':"POST Received"});  //another express helper method
});

module.exports = router;