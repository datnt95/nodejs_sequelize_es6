module.exports = function (sequelize, DataTypes) {
  const Test = sequelize.define('Test', {
    'id': {
      'primaryKey': true,
      'type': DataTypes.INTEGER,
      'autoIncrement': true
    },
    'test': {
      'type': DataTypes.STRING,
      'allowNull': false
    }
  }, {
    'tableName': 'test',
    'createdAt': false,
    'updatedAt': false
  }
  );

  return Test;
};
