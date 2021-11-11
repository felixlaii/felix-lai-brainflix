const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const { title } = require('process');

let videos = fs.readFileSync('./data/videos.json')
videos = JSON.parse(videos);

let videoArray = videos.map((video) => {
    let videoList = {
        id: video.id,
        title: video.title,
        image: video.image,
        description: video.description
    }
    return videoList
})

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