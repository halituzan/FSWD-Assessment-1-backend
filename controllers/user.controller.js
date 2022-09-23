const userModel = require("../models/userModel");
module.exports.users = async (req, res, next) => {
  userModel.find({}, (err, userList) => {
    res.send(userList);
  });
};
module.exports.user = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  userModel
    .findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err.message);
    });
};
