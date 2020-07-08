// report.js
const express = require('express')
const router = express.Router()

// 以routes中的路径作为根目录
// 访问/report
router.get('/', (req, res) => {
    res.send('report')
})

module.exports = router