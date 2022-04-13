const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();



require('dotenv').config();
app.use(cors());

const PORT = process.env.PORT || 8000;




// listen to the application
app.listen(PORT, () =>{
  console.log(`Application running on port ${PORT}`);
});