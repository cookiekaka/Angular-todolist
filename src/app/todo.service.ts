import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor() { }

  getTodoList() {
    return JSON.parse(localStorage.getItem('todoList')) || [];
  }

  saveTodoList(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  getId() {
    return parseInt(localStorage.getItem('id'));
  }

  saveId(id) {
    localStorage.setItem('id', id.toString());
  }
}
