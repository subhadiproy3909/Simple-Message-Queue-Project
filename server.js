require("dotenv").config();
const express = require('express');
const app = express();

// local modules.
require('./services/worker');


const port = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use("/sendmail", require('./route/sendmailRoute'));

app.listen(port, () =>{
    console.log(`Server running at: ${port}`);
})