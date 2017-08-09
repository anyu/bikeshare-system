const models = require('../../db/models');
const knex = require('../../db/config').knex;

module.exports.getAllMembers = (req, res) => {
  models.Member.fetchAll()
    .then((members) => {
      res.status(200).json({members});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.addMember = (req, res) => {
  models.Member.forge({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    status: req.body.status,
    access_level: req.body.access_level
  }).save()
    .then((saved) => {
      res.status(201).json({saved});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};


module.exports.getMember = (req, res) => {
  models.Member.where({ id: req.params.id }).fetch()
    .then((member) => {
      if (!member) {
        throw member;
      }
      res.status(200).json({member});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

/***************************************** TO CHECK *************************************************/
module.exports.updateMember = (req, res) => {
  models.Member.where({ id: req.params.id }).fetch()
    .then((member) => {
      if (!member) {
        throw member;
      }
      return member.save(req.body, { method: 'update' });
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.deleteMember = (req, res) => {
  models.Member.where({ id: req.params.id }).destroy()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};
/***************************************** TO CHECK ends *************************************************/

module.exports.checkRideCount = (req, res) => {
  models.Member.where({ id: req.params.id }).fetch({ columns: ['ride_count'] })
    .then((memberRideCount) => {
      res.status(200).json({memberRideCount});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.checkStatus = (req, res) => {
  models.Member.where({ id: req.params.id }).fetch({ columns: ['status'] })
    .then((memberStatus) => {
      res.status(200).json({memberStatus});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

/***************************************** TODO *************************************************/
module.exports.toggleAccessLevel = (req, res) => {
  models.Member.where({ id: req.params.id }).fetch()
    .then((member) => {
      if (!member) {
        throw member;
      }
      res.status(200).json({member});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

