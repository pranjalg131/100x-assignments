/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
    this.todoList = [];
  }

  add(todo){
    this.todoList.push(todo);
  }

  remove(idx){

    if(idx < 0 || idx >= this.todoList.length) return;

    this.todoList = this.todoList.slice(0,idx).concat(this.todoList.slice(idx+1));
  }

  update(idx , todo){

    if(idx < 0 || idx >= this.todoList.length) return;

    this.todoList[idx] = todo;
  }

  getAll(){
    return this.todoList;
  }

  get(idx){
    if(idx < 0 || idx >= this.todoList.length) return null;
    return this.todoList[idx]
  }

  clear(){
    this.todoList = [];
  }
}

module.exports = Todo;
