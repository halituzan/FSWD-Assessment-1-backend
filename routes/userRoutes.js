const router = require("express").Router();
const { users, user } = require("../controllers/user.controller");

router.get("/api/users", users);
router.get("/api/user/:id", user);

module.exports = router;
