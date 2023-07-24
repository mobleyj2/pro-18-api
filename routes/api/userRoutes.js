const express = require('express');
const router = express.Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,

} = require('../../controllers/userController');
const {addFriend,removeFriend} = require('../../controllers/addFriendController')
// Route for getting all users and creating a new user
router.route('/').get(getUsers).post(createUser);

// Route for getting a single user and deleting a user by their ID
router.route('/:userId').get(getSingleUser).delete(deleteUser);
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend)
module.exports = router;




