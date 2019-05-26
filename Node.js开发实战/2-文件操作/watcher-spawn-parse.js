'use strict'
const fs = require('fs')
const spawn = require('child_process').spawn
const filename = process.argv[2]
if (!filename) {
  throw Error('A file to watch must be specified!')
}

fs.watch(filename, () => {
  const ls = spawn('ls', ['-l', '-h', filename])
  let output = ''
  ls.stdout.on('data', chunk => (output += chunk))
  ls.on('close', () => {
    const parts = output.split(/\s+/)

    // 权限、大小、文件名
    console.log({ parts })
    // parts :
    // [ '-rw-r--r--',
    //  '1',
    //  'KyleWang',
    //  '197121',
    //  '4',
    //  '5月',
    //  '26',
    //  '18:42',
    //  'target.txt',
    //  '' ]
    console.log(parts[0], parts[4], parts[8])
  })
})
console.log(`Now watching ${filename} for changes...`)
