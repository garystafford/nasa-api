'use strict';

const ApiBuilder = require('claudia-api-builder');
const api = new ApiBuilder();
const nasa = require('nasa-api-module');

module.exports = api;

api.get('/apod', function () {
  return new Promise((resolve, reject) => {
    nasa.getAstronomyPicOfDay((err, body) => {
      if (err) {
        return reject(err)
      }

      return resolve(body)
    })
  })
}, {apiKeyRequired: true});

api.get('/epic', function () {
  return new Promise((resolve, reject) => {
    nasa.getEpic((err, body) => {
      if (err) {
        return reject(err)
      }

      return resolve(body)
    })
  })
}, {apiKeyRequired: true});
