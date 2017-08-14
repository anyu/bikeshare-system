const models = require('../../db/models');
const knex = require('../../db/config').knex;

module.exports.getAllMembers = (req, res) => {
  models.Member.fetchAll()
    .then((members) => {
      res.status(200).json(members);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};


module.exports.addMember = (req, res) => {
  models.Member.forge({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    status: req.body.status || 'inactive',
    access_level: req.body.access_level || 'full',
    ride_count: req.body.ride_count || 0
  }).save()
  .then((member) => {
    res.status(201).json(member);
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
      res.status(200).json(member);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

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
      res.status(200).json('Member deleted');
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.checkRideCount = (req, res) => {
  models.Member.where({ id: req.params.id }).fetch({ columns: ['ride_count'] })
    .then((memberRideCount) => {
      res.status(200).json(memberRideCount);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.checkStatus = (req, res) => {
  models.Member.where({ id: req.params.id }).fetch({ columns: ['status'] })
    .then((memberStatus) => {
      res.status(200).json(memberStatus);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.toggleAccessLevel = (req, res) => {
  models.Member.where({ id: req.params.id }).fetch()
    .then((member) => {
      if (!member) {
        throw member;
      }
      if (member.attributes.access_level === 'full') {
        var params = {'access_level': 'none'};
      } else {
        var params = {'access_level': 'full'};
      }
      return member.save(params, {method: 'update',patch: true})
      .then(() => {
        res.status(200).json(member);
      })
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};
