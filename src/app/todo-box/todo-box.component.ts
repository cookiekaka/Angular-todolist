import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-box',
  templateUrl: './todo-box.component.html',
  styleUrls: ['./todo-box.component.css']
})
export class TodoBoxComponent implements OnInit {
  todoList = this.todoService.getTodoList();
  doneCount = this.todoList.filter((todoItem) => todoItem.isDone).length;
  isAllDone = this.todoList.length !== 0 && this.todoList.every((todoItem) => todoItem.isDone);

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onAddTodo (event) {
    if (event.keyCode === 13) {
      let todoText = event.target.value;
      event.target.value = '';
      if (todoText === '') {
        return;
      }
      this.todoList.length === 0 && this.todoService.saveId('0');
      let id = this.todoService.getId();
      this.todoService.saveId(++id);
      this.todoList.push({
        id: id,
        todoText: todoText,
        isDone: false,
      });
      this.todoService.saveTodoList(this.todoList);
      this.calFooterInfo();
    }
  }

  onSelectALl($event) {
    let newTodoList = this.todoList.map((todoItem) => {
      todoItem.isDone = $event.target.checked;
      return todoItem;
    });
    this.todoList = newTodoList;
    this.todoService.saveTodoList(this.todoList);
    this.calFooterInfo();
  }

  onClearDone() {
    let newTodoList = this.todoList.filter((todo) => !todo.isDone);
    this.todoList = newTodoList;
    this.todoService.saveTodoList(newTodoList);
    this.calFooterInfo();
  }

  calFooterInfo() {
    this.doneCount = this.todoList.filter((todoItem) => todoItem.isDone).length;
    this.isAllDone = this.todoList.length !== 0 && this.todoList.every((todoItem) => todoItem.isDone);
  }

  onVoted() {
    this.calFooterInfo();
    this.isAllDone = this.todoList.length !== 0 && this.todoList.every((todoItem) => todoItem.isDone);
  }
}
