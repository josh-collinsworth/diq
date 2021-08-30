const fs = require('fs')
const path = require('path')

try {
  const files = fs.readdir('./src/pages/posts/', (err, files) => {
    files.forEach(file => {
      if (!file.includes('.md')) {
        return
      }
      const data = fs.readFileSync(`./src/pages/posts/${file}`, 'utf8')
      
      const number = data.match(/number: ([0-9]+)/)[1]
      console.log(number)
    })
  })
}

catch(err) {
  console.log(err)
}