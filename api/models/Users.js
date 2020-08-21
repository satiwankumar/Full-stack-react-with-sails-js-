/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    email:{
      type:'string'
    },
    phoneno:{
      type:'number'
    },
    address:{
      type:'string'
    },
    city:{
      type:'string'
    },
    country:{
      type:'string'
    }
   
  },
  
datastore: "mongodb"



};

