const jwt = require('jsonwebtoken');

const config = require('../utils/config');


const tokenExtractor = async (request, response, next) => {
  try {
    const token = request.get('authorization');
    if (!token) request.token = null;
    request.token = token.split(' ')[1];
  } catch {
    request.token = null;
  };
  next();
};

const userExtractor = async (request, response, next) => {
  try {
    const token = request.token;
    if (!token) request.user = null;

    const verifiedToken = jwt.verify(token, config.SECRET);
    if (!verifiedToken) {
      request.user = null;
    } else {
      request.user = verifiedToken.id;
    }
  } catch {
    request.user = null;
  };
  next();
};

module.exports = { tokenExtractor, userExtractor };
