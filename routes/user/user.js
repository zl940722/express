// user.js
const User = require('../../control/user/user')
const express = require('express')
const router = express.Router()

// 获取用户所有数据
router.get('/', (req, res) => {
    User.queryUserAll().then((userData) => {
        res.json(userData)
    }).catch((err) => {
        res.send('error')
        console.log(err)
    })
})
// 根据用户名查询用户数据
router.get('/:username', (req, res) => {
    let username = req.params.username
    User.queryUserOne(username).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.send('error')
        console.log(err)
    })
})
// 增加一条
router.post('/add', (req, res) => {
    let params = req.body
    User.addUser(params).then((result) => {
        console.log(result)
        res.send(result)
    }).catch((err) => {
        res.send('error')
        console.log(err)
    })
})
// 批量增加
router.post('/addBatch', (req, res) => {
    let params = req.body
    console.log(params)
    User.addUserBatch(params).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send('error')
        console.log(err)
    });
})
// 修改一条
router.post('/update', (req, res) => {
    let params = req.body
    console.log(params)
    User.updateUser(params).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send('error')
        console.log(err)
    });
})
// 删除一条
router.delete('/delete/:id', (req, res) => {
    let id = req.params.id
    User.deleteUser(id).then((result) => {
        res.send({"message": "删除成功"})
    }).catch((err) => {
        res.send('error')
        console.log(err)
    });
})

module.exports = router