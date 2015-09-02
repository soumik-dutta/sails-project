/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	process:function(req,res){
        if(req.param('uname')){
            User.findUser(req.param('uname'))
            .then(res.ok)
            .fail(res.badRequest);
        }else{
            res.badRequest('User name is not valid')   
        }
    }
};

