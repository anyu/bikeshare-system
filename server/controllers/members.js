const models = require('../../db/models');
const knex = require('../../db/config').knex;

module.exports.getAll = (req, res) => {
  models.Member.fetchAll()
    .then(members => {
      res.status(200).send(members);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};