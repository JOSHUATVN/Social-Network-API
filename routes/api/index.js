const router = require('express').Router();

const userRoutes = ('./user-routes');




router.use('/users', userRoutes);



module.exports = router;