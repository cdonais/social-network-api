const router = require('express').Router();

router.get('/users', (req, res) => {
    return res.send('in user route');
})

module.exports = router;