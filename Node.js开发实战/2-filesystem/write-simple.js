'use strict'
const fs = require('fs')
fs.writeFile('target.txt', '汪凯鹏', err => {
  if (err) {
    throw err
  }
  // console.log(data.toString())
  console.log('File saved!')
})
