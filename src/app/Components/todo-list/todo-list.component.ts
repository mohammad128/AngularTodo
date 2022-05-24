import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Interfaces/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  @Input() items: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onDeleteTodo = new EventEmitter<Todo>();

}
