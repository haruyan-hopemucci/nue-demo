
  import { todoItems, addTodoItem } from "./todo.js";

export const lib = [
{
  name: 'TodoList',
  tagName: 'div',
  tmpl: '<div> <p :for="0"> <span>:1:</span> <spna>:2:</spna> </p> </div>',
  Impl: class { 
    constructor(){
      this.items = todoItems
      console.debug(this.items)
    }
   },
  fns: [
    _ => ['item', _.items, '$index'],
    _ => [_.item.title],
    _ => [_.item.isDone ? '完了' : '進行中']
  ]
}]
export default lib[0]