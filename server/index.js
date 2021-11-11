const express = require('express');
const app = express();
const videoRoutes = require ('./routes/videoRoutes');
const cors=require('cors');


// app.use('/api/videos')

require("dotenv").config();
const port = process.env.PORT || 9000

app.use(cors())

app.use(express.json())
app.use(express.static('./public'))
app.use('/videos', videoRoutes)

app.listen(port, function() {
    console.log('listen')
});