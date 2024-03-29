require('dotenv').config();

'use strict';
module.exports = {
  'client': 'pg',
  'connection': {
    'host': process.env.DB_HOSTNAME,
    'user': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_NAME,
    'port': process.env.DB_PORT
  },
  'debug': false,
  'pool': {
    'min': 1,
    'max': 2
  },  
  'migrations': {
    'directory': 'db/migrations'
  },
  'seeds': {
    'directory': 'db/seeds'
  }
};

