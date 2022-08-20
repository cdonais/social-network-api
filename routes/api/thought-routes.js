const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    addThought,
    deleteThought
} = require('../../controllers/thought-controller');

router.route('/thoughts')
  .get(getAllThoughts)
  .post(addThought);

router.route('/thoughts/:id')
  .get(getSingleThought)
  .delete(deleteThought)
  
module.exports = router;  