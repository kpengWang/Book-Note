'use strict'
const fs = require('fs')
fs.readFile('target.txt', 'hello word', (err, data) => {
  if (err) {
    throw err
  }
  // console.log(data.toString())
  console.log('File saved!')
})
