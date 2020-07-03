const fs = require('fs');

// beware, synchronous
let getDirContents = path => {
  let files = []
  const dir = fs.opendirSync(path)
  while (true) {
    let d = dir.readSync()
    if (d == null) break;
    else {
      if (d.name.trim().endsWith("e"))
      files.push(d.name)
    }
    return files
  }

  let collate = async (file, collation) => {
      let data = fs.readFileSync(file)
      fs.appendFileSync(collation, data.toString())
    }
  }
  
  let main = async () => {
    let files = await getDirContents(path.join(__dirname, 'dump/'))
    files.forEach(f => {
      collate(f, __dirname)
    })
  } 

main()