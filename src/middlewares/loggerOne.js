
const loggerOne = (request, response, next) => {
    console.log(request.originalUrl);
    next();
}

module.exports = loggerOne;
