
  import { todoItems, addTodoItem } from "./todo.js";

export const lib = [
{
  name: 'todo-list',
  tagName: 'div',
  tmpl: '<div> <p :for="0"> <span>:1:</span> <spna>:2:</spna> </p> </div>',
  Impl: class { 
    constructor(){
      this.items = todoItems
      console.debug('constractor todo-list')
    }
   },
  fns: [
    _ => ['item', _.items, '$index'],
    _ => [_.item.title],
    _ => [_.item.isDone ? '完了' : '進行中']
  ]
},{
  name: 'input-todo',
  tagName: 'div',
  tmpl: '<div> <input type="text" name="title" ref="inputTodo"> <button @click="0">Add Todo</button> </div>',
  Impl: class { 
    constructor(){
      console.debug('constractor input-todo')
    }
    onClickInputTodo() {
      addTodoItem(this.$refs.inputTodo.value);
    }
   },
  fns: [
    (_,e) => { _.onClickInputTodo.call(_, e) }
  ]
}]
export default lib[0]