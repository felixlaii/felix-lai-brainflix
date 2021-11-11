const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
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
  const { title, description, image } = req.body;

  videos.push({
      id: uuidv4(),
      title,
      description,
      channel: "Felix Lai",
      image,
      views: "49,399,063",
      likes: "20,956,201",
      video: "http://project-2-api.herokuapp.com/stream",  
      duration: "3:29",
      timestamp: Date.now(),
      comments: [],
    }); 
        fs.writeFileSync('./data/videos.json', JSON.stringify(videos));
        res.status(201).json(videos);
    
    res.json(videos)
})

module.exports = router;