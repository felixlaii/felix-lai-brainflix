const express = require('express');
const router = express.Router();
const fs = require("fs");

let videos = fs.readFileSync('./data/videos.json')
videos = JSON.parse(videos);


router.get('/', (req, res) => {
    res.json(videos)
});

router.get('/:videoId', (req, res) => {
    const video = videos.find(video => video.id === req.params.videoId)
    if (!video) {
        return res.status(404)
        .json({
            errorMessage: `Video ${req.params.videoId} not found`
        })
    }
    return res.json(video)
})

router.post('/', (req, res) => {
    res.send('you have posted')
})

module.exports = router;