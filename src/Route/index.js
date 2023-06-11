const home = require('./Home');
function route(app) {
    app.use('/',home);
}

module.exports = route;

