import { Component, OnInit } from '@angular/core';
import { Todo } from './Interfaces/Todo';
import { TodoStatus } from './Interfaces/TodoStatus';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  addNewItemDialogShow:boolean = false;
  title = 'TodoApp';

  todoItems: Todo[] = [
  ]


  ngOnInit(): void {
    for(let i=1; i<=5; i++) {
      let todo:Todo = {
        id: uuidv4(),
        title: `This is Todo ${i}`,
        status: [TodoStatus.COMPLETED, TodoStatus.NOT_COMPLETED][Math.floor( Math.random() * 2 )]
      };
      this.todoItems.push(todo);
    }
    console.log(this.todoItems);
  }

  saveTodoItem(e:any) {
    let todo:Todo = {
      id: uuidv4(),
      title: e['title'],
      status: e['status'],
    };
    this.todoItems.push(todo);
    this.addNewItemDialogShow=false;
  }
  
  deleteTodo(todo:Todo){
      this.todoItems = ( this.todoItems.filter((el:Todo)=>el.id!=todo.id) );
  }
}
