const express = require('express')

const app = express() // đặt tên là app để sử dụng các tính năng của thằng express
const port = 3000 // tạo tham số gọi là port, cổng đặt ngẫu nhiên

app.get('/', (req, res) => {
    res.send('Hello World!! Le Giau and Nodejs')
})

app.get('/about', (req, res) => {
    res.send('Đây là trang about, trang điều hướng!!')
})

app.listen(port, () => { // lắng nghe cái cổng mình đã tạo
    console.log(`Example app listening on port ${port}`)
})
/*Bình thường thì là vậy nè
app.listen(port, function (){

})

app.listen(port, () => {

})
*/