import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Interfaces/Todo';
import { TodoStatus } from 'src/app/Interfaces/TodoStatus';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = {
    id: '1',
    title: "",
    status: TodoStatus.COMPLETED
  };

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onDeleteTodo = new EventEmitter<Todo>()

}
