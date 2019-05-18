import config from 'config';
import Sequelize from 'sequelize';
import log4js from 'log4js';
import glob from 'glob';

const log = log4js.getLogger();
const dbConfig = config.get('dbConfig');
const db = {};
const Op = Sequelize.Op;
const operatorsAliases = {
  '$eq': Op.eq,
  '$ne': Op.ne,
  '$gte': Op.gte,
  '$gt': Op.gt,
  '$lte': Op.lte,
  '$lt': Op.lt,
  '$not': Op.not,
  '$in': Op.in,
  '$notIn': Op.notIn,
  '$is': Op.is,
  '$like': Op.like,
  '$notLike': Op.notLike,
  '$iLike': Op.iLike,
  '$notILike': Op.notILike,
  '$regexp': Op.regexp,
  '$notRegexp': Op.notRegexp,
  '$iRegexp': Op.iRegexp,
  '$notIRegexp': Op.notIRegexp,
  '$between': Op.between,
  '$notBetween': Op.notBetween,
  '$overlap': Op.overlap,
  '$contains': Op.contains,
  '$contained': Op.contained,
  '$adjacent': Op.adjacent,
  '$strictLeft': Op.strictLeft,
  '$strictRight': Op.strictRight,
  '$noExtendRight': Op.noExtendRight,
  '$noExtendLeft': Op.noExtendLeft,
  '$and': Op.and,
  '$or': Op.or,
  '$any': Op.any,
  '$all': Op.all,
  '$values': Op.values,
  '$col': Op.col
};

const sequelize = new Sequelize(dbConfig.databaseName, dbConfig.userName, dbConfig.password, {
  'host': dbConfig.host,
  'dialect': 'postgres',
  'pool': {
    'max': 10,
    'min': 1,
    'acquire': 30000,
    'idle': 10000
  },
  'logging': false,
  'operatorsAliases': operatorsAliases
});

glob.sync('**/*.model.js', {'realpath': true })
  .forEach(file => {
    if(file.slice(-8) === 'model.js'){
      const model = sequelize.import(file);
      db[model.name] = model;
    }
  });

/* Mapping on relationship between each tables */

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
  .authenticate()
  .then(() => {
    log.info('Connection to the database has been established successfully.');
  })
  .catch(err => {
    log.error('Unable to connect to the database:', err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
