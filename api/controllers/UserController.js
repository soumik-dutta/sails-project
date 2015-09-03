/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	process:function(req,res){
        if(req.param('uname')){
            var uname=req.param('uname');
            var upass=req.param('upass');
            User.findOne({uname:uname,upass:upass}).exec(function(err,doc){
                if(err)
                    res.badRequest('User name is not valid') 
                 if(typeof doc === "undefined")
                    res.badRequest('User name is not valid') 
                sails.log(doc);   
                res.json(doc);
            });   
            /*var User=UserService.findUser(uname)
            sails.log(User);*/
        }else{
            res.badRequest('User name is not valid')   
        }
    }
};

