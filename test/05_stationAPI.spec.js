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

  it('should accept POST requests to /api/stations', (done) => {
    let newStation = {
      bike_count: 3,
      max_capacity: 30
    }
    request(app)
      .post('/api/stations')
      .type('form')
      .send(newStation)
      .expect((res) => {
        res.body = {
          bike_count: res.body.bike_count,
          max_capacity: res.body.max_capacity
        };
      })
      .expect((201), newStation)
      .end(done);
  });

  it('should accept PUT requests to /api/stations/:id', (done) => {
    let updatedStation = {
      bike_count: 4,
      max_capacity: 20
    }
    request(app)
      .put('/api/stations/1')
      .type('form')
      .send(updatedStation)
      .expect((res) => {
        res.body = {
          bike_count: res.body.bike_count,
          max_capacity: res.body.max_capacity
        };
      })
      .expect((200), updatedStation)
      .end(done);
  });

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
