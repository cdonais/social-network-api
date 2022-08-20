const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/users', (req, res) => {
    return res.send('in user route');
})

module.exports = router;