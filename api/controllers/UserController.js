/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  process: function(req, res) {
    if (req.param('uname')) {
      var uname = req.param('uname');
      var upass = req.param('upass');
      User.findOne({
        uname: uname,
        upass: upass
      }).exec(function(err, doc) {
        if (err)
          res.badRequest('User name is not valid')
        if (typeof doc === "undefined")
          res.badRequest('User name is not valid')
        sails.log(doc);
        res.json(doc);
      });
      /*var User=UserService.findUser(uname)
      sails.log(User);*/
    } else {
      res.badRequest('User name is not valid')
    }
  },
  /**
   *description::

   */
  updateUser: function(req, res) {
    if (req.param('name') && req.param('college') && req.param('stream')) {
      var name = req.param('name');
      var college = req.param('college');
      var stream = req.param('stream');
      var id = req.param('id');
      User.update({
        'id': id
      }, {
          'name': name,
          'stream': stream,
          'college': college
        }).exec(function(err,doc) {
        if(err)
           throw err;
        res.redirect('/User/all')
      });
    }
  },


    getUser: function(req, res) {
    User.find({
      'id': req.param('id')
    }).exec(function(err, doc) {
      res.view('updateUser',{things: {
        id: doc[0].id,
        name: doc[0].name,
        college: doc[0].college,
        stream: doc[0].stream
      }});
    })
  }


};
