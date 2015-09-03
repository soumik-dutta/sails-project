module.exports = {
  findUser: function(uname) {
    // here you call your models, add object security validation, etc...
    //sails.log(User.findOne(uname));
    return User.findOne(uname);
  }
};