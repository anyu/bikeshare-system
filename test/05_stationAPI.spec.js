'use strict';
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../server/server.js');
const dbUtils = require('../db/lib/utils.js');

describe('Stations API', () => {
  beforeEach((done) => {
    dbUtils.rollbackMigrate(done);
  });

  afterEach((done) => {
    dbUtils.rollback(done);
  });

  it('should accept GET requests to /api/stations', (done) => {
    request(app)
      .get('/api/stations')
      .expect((res) => {
        res.body = {
          length: res.body.length
        };
      })
      .expect((200), {
        length: 10
      })
      .end(done);
  });

  it('should accept GET requests to /api/stations/:id', (done) => {
    request(app)
      .get('/api/stations/1')
      .expect((res) => {
        res.body = {
          id: res.body.id,
        };
      })
      .expect((200), {
        id: 1,
      })
      .end(done);
  });

  it('should send 404 if ID on GET requests to /api/stations/:id does not exist', (done) => {
    request(app)
      .get('/api/stations/9023')
      .expect(404)
      .end(done);
  });

  // it('should accept POST requests to /api/stations', (done) => {
  //   request(app)
  //     .post('/api/stations')
  //     .send({
  //       first_name: 'Joe',
  //       last_name: 'Shmo',
  //       email: 'joe@gmail.com'
  //     })
  //     .expect((res) => {
  //       res.body = {
  //         first_name: res.body.first_name,
  //         last_name: res.body.last_name,
  //         email: res.body.email
  //       };
  //     })
  //     .expect(201, {
  //       first_name: 'Yo',
  //       last_name: 'Dawg',
  //       email: 'yoda'
  //     })
  //     .end(done);
  // });

  // it('should accept PUT requests to /api/stations/:id', () => {
  //   let member = {
  //     first_name: 'Angela',
  //     last_name: 'Yangela',
  //     email: 'ay@gmail.com',
  //   };
  //   return request(app)
  //     .put('/api/stations/1')
  //     .send(member)
  //     .expect(201)
  //     .then(() => {
  //       return request(app)
  //         .get('/api/stations/1')
  //         .expect((res) => {
  //           res.body = {
  //             first_name: res.body.first,
  //             last_name: res.body.last,
  //             email: res.body.email,
  //           };
  //         })
  //         .expect(200, member);
  //     });
  // });

  // it('sends 404 if id on PUT requests to /api/stations/:id does not exist',  (done) => {
  //   request(app)
  //     .put('/api/stations/123')
  //     .expect(404)
  //     .end(done);
  // });

  it('should accept DELETE requests to /api/stations/:id',  (done) => {
    request(app)
      .delete('/api/stations/1')
      .expect(200)
      .end(done);
  });

  it('should send 404 if id on DELETE requests to /api/stations/:id does not exist',  (done) => {
    request(app)
      .delete('/api/stations/99123')
      .expect(404)
      .end(done);
  });
});
