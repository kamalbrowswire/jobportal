var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/*router.get('/singup', function(req, res) {
     var vm = {
       
       title: 'Sign Up'
     };

     res.render('users/singup', vm);
    /*res.send('<h1>hello World</h1>')
});*/

module.exports = router;
