import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'


const readFile = (filename) => {
    const rawFile = fs.readFileSync(filename, 'utf-8')

    const parser = matter(rawFile);
    const html = marked(parser.content);
    console.log(html);
}

readFile(path.join(path.resolve(), 'src/pages/index.md'))