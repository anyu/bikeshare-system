'use strict';
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../server/server.js');
const dbUtils = require('../db/lib/utils.js');

describe('Bikes API', () => {
  beforeEach((done) => {
    dbUtils.rollbackMigrate(done);
  });

  afterEach((done) => {
    dbUtils.rollback(done);
  });

  it('should accept GET requests to /api/bikes', (done) => {
    request(app)
      .get('/api/bikes')
      .expect((res) => {
        res.body = {
          length: res.body.length
        };
      })
      .expect((200), {
        length: 200
      })
      .end(done);
  });

  it('should accept GET requests to /api/bikes/:id', (done) => {
    request(app)
      .get('/api/bikes/1')
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

  it('should send a 404 if ID on GET requests to /api/bikes/:id does not exist', (done) => {
    request(app)
      .get('/api/bikes/9023')
      .expect(404)
      .end(done);
  });

  it('should accept POST requests to /api/bikes', (done) => {
    let newBike = {
      status: 'available',
      docked_station_id: 9,
    }
    request(app)
      .post('/api/bikes')
      .type('form')
      .send(newBike)
      .expect((res) => {
        res.body = {
          status: 'available',
          docked_station_id: res.body.docked_station_id
        };
      })
      .expect((201), newBike)
      .end(done);
  });

  it('should accept PUT requests to /api/bikes/:id', (done) => {
    let updatedBike = {
      status: 'unavailable',
      docked_station_id: 2
    }
    request(app)
      .put('/api/bikes/1')
      .type('form')
      .send(updatedBike)
      .expect((res) => {
        res.body = {
          status: 'unavailable',
          docked_station_id: JSON.parse(res.body.docked_station_id)
        };
      })
      .expect((200), updatedBike)
      .end(done);
  });

  it('should accept DELETE requests to /api/bikes/:id',  (done) => {
    request(app)
      .delete('/api/bikes/1')
      .expect((res) => {
        res.body = {
          length: 0
        };
      })
      .end(done);
  });

  it('sends 404 if id on DELETE requests to /api/bikes/:id does not exist',  (done) => {
    request(app)
      .delete('/api/bikes/99123')
      .expect(404)
      .end(done);
  });
});
