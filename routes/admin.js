var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy=require("passport-local").Strategy;
var adminModel = require('../model/adminmodel'); 

//isAuthincation function for authoriztaion
function isAuthincation(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	else {
		res.redirect('/login');
}
}


router.get('/login' , function(req, res) {
   
   res.render('admin/login', {title: 'Login'});


});




router.post('/create',function(req, res){
	var user = new adminModel();
	user.fullname = req.body.fullname;
    user.email    = req.body.email;
    user.address  = req.body.address;
    user.city     = req.body.city;
    user.country  = req.body.country;
    user.username = req.body.username;
    user.password = req.body.password;
	
   console.log(req.body);
    user.save(function (err, data) {
					if (err) 
					{
						//console.log(err);
						res.send(err);
						
					}
					else
						{
						//console.log(data);
						   res.render('admin/login');
					    }
			
		})
});

//login router***
router.post('/login', passport.authenticate('local',
	{
		successRedirect : '/index',
	    failureRedirect : '/login'
	})
		
});





//**checkeing**************
passport.use(new LocalStrategy(function(username,password,done){
	adminModel.findOne({username:'username'},function(err,user){

		if(err){
		return done(err);
		}
		if (!user) 
		    {
			return done(null, false);
			}
		if(user.password !== password)
			{
				return done(null, false);
			}
			
			return done(null, user);
	});	
}));



/*router.post('/login', function(req, res, next) {

var password = req.body.password;
console.log(password);
adminModel.findOne({password: password},function(err,person) {
	if(err)
	{
		console.log("err", err);
    }
    else
    {
	    if(person)
	    {
		    if (person.password == password)
			{
				console.log("login successfull");
				 //res.render('admin/index');
			}
			else
			{
				res.send(err);
			}
		}
		else
		{
			//console.log('3333333333333');
			res.send({error:"email/password not valid"});
		}
    }
  });
});*/



module.exports = router;
