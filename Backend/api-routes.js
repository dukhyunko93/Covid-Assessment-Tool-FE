// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var contactController = require('./contactController');
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

var covidDataController = require('./covidDataController');

router.route('/covid_data')
    .get(covidDataController.index)
    .post(covidDataController.new);
router.route('/covid_data/:fips')
    .get(covidDataController.view)
// Export API routes
module.exports = router;