'use strict';

/**
 * Module dependencies.
 */
var controller = require('../../app/controllers/controller.js');

module.exports = function(app) {
    app.route('/api/getDetails')
        .get(controller.getDetails);
};