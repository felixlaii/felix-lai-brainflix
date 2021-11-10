const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('get all videos')
});

router.get('/:id', (req, res) => {
    res.send('here is your selected video')
})

router.post('/', (req, res) => {
    res.send('you have posted')
})

module.exports = router;