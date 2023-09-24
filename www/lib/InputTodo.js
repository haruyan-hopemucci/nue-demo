
  import { todoItems, addTodoItem } from "./todo.js";

export const lib = [
{
  name: 'InputTodo',
  tagName: 'div',
  tmpl: '<div> <input type="text" name="title" ref="inputTodo"> <button @click="0">Add Todo</button> </div>',
  Impl: class { 
    constructor(){
      console.debug('constractor InputTodo')
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