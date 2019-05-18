'use strict';

const httpStatusCode = require('http-status-codes');

const resultFactory = (httpCode, code, data) => {
  let result = {
    'httpCode': httpCode,
    'code': code
  };

  if (data) {
    result = Object.assign(result, { 'data': data });
  }

  return result;

};

const badRequest = (code) => {
  return resultFactory(httpStatusCode.BAD_REQUEST, code);
};

const forbidden = (code) => {
  return resultFactory(httpStatusCode.FORBIDDEN, code);
};

const internalServerError = (code) => {
  return resultFactory(httpStatusCode.INTERNAL_SERVER_ERROR, code);
};

const notFound = (code) => {
  return resultFactory(httpStatusCode.NOT_FOUND, code);
};

const success = (code, data) => {
  return resultFactory(httpStatusCode.OK, code, data);
};

module.exports = {
  'badRequest': badRequest,
  'forbidden': forbidden,
  'internalServerError': internalServerError,
  'notFound': notFound,
  'success': success
};
