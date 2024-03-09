'use strict';

/** @type {import('sequelize-cli').Migration} */
// email: DataTypes.STRING,
// password: DataTypes.STRING,
// firstName: DataTypes.STRING,
// lastName: DataTypes.STRING,
// address: DataTypes.STRING,
// gender: DataTypes.STRING,
// roleId: DataTypes.STRING,
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'truonglykhong2003@gmail.com',
      password:'12345',
      firstName: 'ly',
      lastName: 'truong',
      address:'saigon',
      gender: 1,
      typeRole:'ROLE',
      keyRole:'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
