import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Interfaces/Todo';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {
  title = "";
  status = "";
  

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onClose = new EventEmitter();
  @Output() onSave = new EventEmitter();

}
