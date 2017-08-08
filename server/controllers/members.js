const models = require('../../db/models');
const knex = require('../../db/config').knex;

module.exports.getAllMembers = (req, res) => {
  models.Member.fetchAll()
    .then(members => {
      res.status(200).json({members});
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

module.exports.addMember = (req, res) => {
  models.Member.forge({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }).save()
    .then((saved) => {
      res.status(200).json({saved});
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

module.exports.getMember = (req, res) => {
  models.Member.where({ id: req.params.id }).fetch()
    .then(member => {
      if (!member) {
        throw member;
      }
      res.status(200).json({member});
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

module.exports.updateMember = (req, res) => {
  models.Member.where({ id: req.params.id }).fetch()
    .then(member => {
      if (!member) {
        throw member;
      }
      return member.save(req.body, { method: 'update' });
    })
    .then(() => {
      res.sendStatus(201);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

module.exports.deleteMember = (req, res) => {
  models.Member.where({ id: req.params.id }).destroy()
    .then((destroyed) => {
      res.status(200).json({destroyed});
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};
