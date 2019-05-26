'use strict'
const fs = require('fs')
const spawn = require('child_process').spawn
const filename = process.argv[2]
if (!filename) {
  throw Error('A file to watch must be specified!')
}
fs.watch(filename, () => {
  const ls = spawn('ls', ['-l', '-h', filename])
  ls.stdout.pipe(process.stdout)
  // -rw-r--r-- 1 KyleWang 197121 6 5月  26 18:30 target.txt
})
console.log(`Now watching ${filename} for changes...`)
