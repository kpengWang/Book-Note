'use strict'
const fs = require('fs')
const argv = process.argv
const filename = argv[1]

console.log({ argv })
// argv:
//    [ 'D:\\Program Files\\nodejs\\node.exe',
//      'F:\\node-learn\\filesystem\\watcher.js' ]
//

if (!filename) {
  throw Error('A file to watch must be specified!')
}
fs.watch('target.txt', () => console.log(`File ${filename} changed!`))
console.log('Now watching target.txt for changes...')
