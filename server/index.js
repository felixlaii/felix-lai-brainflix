const express = require('express');
const app = express();
const videoRoutes = require ('./routes/videoRoutes');

require("dotenv").config();
const port = process.env.PORT || 9000

app.use('/videos', videoRoutes)

app.listen(8080, function() {
    console.log('listen')
});