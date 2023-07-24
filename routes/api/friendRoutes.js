const router = require('express').Router();
const {
  addFriend,
  removeFriend,
  getFriends,
} = require('../../controllers/addFriendController');

// /api/friends/add
router.post('/add', addFriend);

// /api/friends/remove
router.delete('/remove', removeFriend);

// /api/friends/:userId
router.get('/:userId', getFriends);

module.exports = router;

