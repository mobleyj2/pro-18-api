/*const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoutes');
const userRoutes = require('./userRoutes');




router.use('/thoughts', thoughtsRoutes);
router.use('/users', userRoutes);

module.exports = router;*/


const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoutes');
const userRoutes = require('./userRoutes');
const reactionRoutes = require('./reactionRoutes'); // Include the reaction routes

router.use('/thoughts', thoughtsRoutes);
router.use('/users', userRoutes);
router.use('/reactions', reactionRoutes); // Mount the reaction routes at '/reactions'

module.exports = router;
