'use strict';
var faker = require('faker/locale/en')
,bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
	return queryInterface.bulkInsert('users', [{
		useaccount: '111',
    createdAt:'11/11/11',
    updatedAt:'11/11/11',
		useenc_password:bcrypt.hashSync('111',8)  
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
	return queryInterface.bulkDelete('subjects', null, {});
  }
};
