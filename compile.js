import { compileFile } from 'nuejs-core'

await compileFile('templates/gallery.nue', 'www/lib/gallery.js')
await compileFile('templates/InputTodo.nue.html', 'www/lib/InputTodo.js')
await compileFile('templates/TodoList.nue.html', 'www/lib/TodoList.js')
await compileFile('templates/AppTodo.nue.html', 'www/lib/AppTodo.js')
await compileFile('templates/TodoComponents.nue.html', 'www/lib/TodoComponents.js')
