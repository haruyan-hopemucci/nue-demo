import { parse, render } from 'nuejs-core'
import { promises as fs } from 'node:fs'

const read = async (name, dir = 'templates') => await fs.readFile(dir + '/' + name, 'utf-8')
// read dependencies (server-side components)
const page = await read('AppTodo.nue.html')

const html = render(page)

// write index.html
await fs.writeFile('./www/todo.html', html)

console.log('wrote', 'www/todo.html')