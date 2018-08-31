const router = require('express-promise-router')();
const UserController = require('../controllers/user-controller');
const {  validateBody, schemas } = require('../helpers/route-helpers')

router.route('/signup')
  .post(validateBody(schemas.authSchema), UserController.signup);

router.route('/signin')
  .post(UserController.signin);

router.route('/secret')
  .get(UserController.secret);

module.exports = router;
