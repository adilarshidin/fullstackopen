const unknownEndpoint = (request, response) => {
  response.status(404).json({
    result: true,
    message: 'Endpoint was not found.'
  });
};


module.exports = { unknownEndpoint };
