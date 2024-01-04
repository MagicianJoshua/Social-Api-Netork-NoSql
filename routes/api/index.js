const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ThoughtRoutes = require('./thoughtRoutes')
router.use("/users", userRoutes);
router.use("/thoughts", ThoughtRoutes )

module.exports = router;