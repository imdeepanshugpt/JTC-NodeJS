const express = require('express');
const controller = require('../controllers/posts');

const router = express.Router();

router.get('/all', controller.getPosts);
router.put('/updatepost', controller.updatePost);
router.post('/createpost', controller.createPost);
module.exports = router;
