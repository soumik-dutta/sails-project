/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

//user auth model 
module.exports = {

  attributes: {
       uname:{
          type:'string',
          unique:true
       },
       upass:{
          type:'string'   
       }
  }
};

