const router = require('express').Router();
const dashboard = require('../controllers/dashboard.controller');



router.get('/', dashboard.viewDashboard);
router.get('/login', dashboard.logIn);



// router.all('*', settings.err404);
module.exports = router;