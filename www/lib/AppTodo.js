
export const lib = [
{
  tagName: 'html',
  tmpl: '<html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>TodoApp</title> </head> <body> <main @name="0"> <h1>Todo</h1> <h2>Input Todo</h2> <input-todo></input-todo> <h2>List</h2> <todo-list></todo-list> <script type="module" src="./app_todo.js"></script> </main> </body></html>',
  fns: [
    (_,e) => { _.app-_.todo }
  ]
}]
export default lib[0]