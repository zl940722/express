// index.js
const express = require('express');
const app = express()
const port = 3022
const router = express.Router();
// 访问  ‘/’
router.get('/', function(req, res, next) {
    res.send('index');
});


// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
module.exports = router;