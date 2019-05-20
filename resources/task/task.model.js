'use strict';

module.exports = function(sequelize, DataTypes) {
  let Task = sequelize.define('Task', {
    'id': {
      'type': DataTypes.INTEGER,
      'allowNull': false,
      'autoIncrement': true,
      'primaryKey': true
    },
    'title': {
      'type': DataTypes.STRING,
      'allowNull': false
    },
    'active': {
      'type': DataTypes.BOOLEAN,
      'defaultValue': true
    }
  }, {
    'tableName': 'tasks',
    'createdAt': true,
    'updatedAt': true
  });

  Task.associate = function(models) {
    Task.hasMany(models.TaskItem, {
      'foreignKey': {
        'name': 'task_id'
      }
    });
  };

  return Task;
};
