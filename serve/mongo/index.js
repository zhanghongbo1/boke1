
var mongoose = require('mongoose')

url = 'mongodb://localhost:27017/arr';
const connectFn = () => {
    mongoose.connect( url, err => {
      if ( err ) {
        console.log('数据库连接失败')
      } else {
        console.log('数据库连接成功')
      }
    })
  }

  module.exports=connectFn