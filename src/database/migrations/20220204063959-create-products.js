'use strict';

module.exports = {
   up (queryInterface, Sequelize) {
    return queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.FLOAT,
      },
      created_at: {
          type: Sequelize.DATE,
          allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  
  },

   down (queryInterface, Sequelize) {
     return queryInterface.dropTable('products');
  
  }
};
