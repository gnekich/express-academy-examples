/*
Reference: https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
*/
const asyncMiddleware = fn => (req, res, next) => {
  Promise
    .resolve(fn(req, res, next))
    // eslint-disable-next-line promise/no-callback-in-promise
    .catch(next);
};

module.exports = {
  asyncMiddleware,
  wrap: asyncMiddleware,
};
