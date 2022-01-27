import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

//1.Read the md files
// 2.Process the headers
// 3.read the content
// 4.return as object
// 5.inject into template (html)
//6.save file to serve them

const readFile = (filename) => {
    const rawFile = fs.readFileSync(filename, 'utf-8')

    const parser = matter(rawFile);
}

readFile(path.join(path.resolve(), 'src/pages/index.md'))