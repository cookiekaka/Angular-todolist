import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { TodoService } from '../todo.service';
import { TODO } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  @Input() todoList;
  @Input() todo: TODO;
  @Output() onVoted = new EventEmitter<TODO>();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onChangeChecked($event) {
    let doneCount = 0;
    this.todoList.forEach((todoItem) => {
      this.todo.id === todoItem.id && (this.todo.isDone = $event.target.checked);
      todoItem.isDone && doneCount++;
    });
    this.todoService.saveTodoList(this.todoList);
    this.onVoted.emit(this.todo);
  }

  onDelTodo() {
    for (let index in this.todoList) {
      if (this.todo.id === this.todoList[index].id) {
        this.todoList.splice(index, 1);
        break;
      }
    }
    this.todoService.saveTodoList(this.todoList);
    this.onVoted.emit(this.todo);
  }

}
