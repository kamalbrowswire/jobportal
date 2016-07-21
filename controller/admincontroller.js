var Usermodel = require('../model/adminmodel');

//************************************ sign up admin*******************************************//
module.exports.signup =  function(req, res) 
{
    var user      = new Usermodel();
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
						//console.log("valueEnterd");
						res.send(data);
					    }
			
		})
	};
	
//****************** login user******************//
/*module.exports.login =  function(req, res) 
{
var email = req.body.email;
var password =req.body.password;

Usermodel.findOne({email:email},function(err,person){
	if(err)
	{ 
        //console.log(err);
		res.send(err);
	}
	else
	{
	      if(person)
		  {
			  if(person.password == password)
			  {
				  res.send(person);
				  console.log("success login");
				  //res.redirect('/signup');
			  }
			  else
			  {
				  console.log("Invalid email or password");
			  //res.send({error:'Invalid password'});
			  
			  }
			  
		  }
		  
		  else
		  {
			  //console.log("Invalid Email");
			  res.send({error:'Email is invalid'});
			
		  }
	}
});
}*/