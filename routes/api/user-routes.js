const router = requires('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
  } = require('../../controllers/user-controller');
  
  router.route('/users')
    .get(getAllUsers)
    .post(createUser)
  
  router.route('/users/:id')
     .get(getSingleUser)
     .put(updateUser)
     .delete(deleteUser)
  
  
  module.exports = router;