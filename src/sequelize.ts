import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.dbUsername,
  'password': config.dbPassword,
  'database': config.dbName,
  'host': config.dbHost,
  'storage': ':memory:',
  dialect : config.dbDialect
});
