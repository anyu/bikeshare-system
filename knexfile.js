require('dotenv').config();

'use strict';
module.exports = {
  'client': 'pg',
  'connection': {
    'host': process.env.DB_HOSTNAME,
    'user': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_DATABASE,
    'port': process.env.DB_PORT
  },
  'migrations': {
    'directory': 'db/migrations'
  }
};
