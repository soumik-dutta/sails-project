module.exports = {
  findUser: function(uname) {
    // here you call your models, add object security validation, etc...
    return Store.findOne(uname);
  }
};