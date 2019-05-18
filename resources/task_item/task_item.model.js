'use stric';

module.exports = function(sequelize, DataTypes) {
  let TaskItem = sequelize.define('TaskItem', {
    'id': {
      'type': DataTypes.INTEGER,
      'allowNull': false,
      'primaryKey': true,
      'autoIncrement': true
    },
    'name': {
      'type': DataTypes.STRING,
      'allowNull': false
    },
    'description': {
      'type': DataTypes.TEXT,
      'allowNull': false
    },
    'status': {
      'type': DataTypes.INTEGER,
      'allowNull': false,
      'defaultValue': 0
    },
    'taskId': {
      'type': DataTypes.INTEGER,
      'allowNull': false,
      'field': 'task_id'
    }
  }, {
    'tableName': 'task_items',
    'createdAt': true,
    'updatedAt': true
  });

  TaskItem.associate = function(models) {
    models.TaskItem.belongsTo(models.Task, {
      'foreignKey': 'task_id'
    });
  };

  return TaskItem;
};
