const express = require('express');
const router = express.Router();
const postService = require('../service/postService');

router.get('/', async (req, res) => {
    const posts = await postService.getPosts();
    res.status(200).json(posts);
});
router.get('/:id', (req, res) => {});
router.post('/', (req, res) => {});
router.put('/:id', (req, res) => {});
router.delete('/:id', (req, res) => {});

module.exports = router;