import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './models/todo.model';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    CommonModule,
    InputComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todoData: any = TODO_DATA[0];

  // @ViewChild('todoRef', {read : ElementRef }) todo?: ElementRef;

  @ViewChildren('todoRef', { read: ElementRef}) todo?: QueryList<ElementRef>;
  
  constructor(
    public router: Router
  ) {}

  getTodoInfo(val: NTodo.TodoData) {
    // console.log(val);
  }

  trackByFn(_index: number, item: NTodo.TodoData) {
    return item.id;
  }

  orderData() {
    // this.todoData.sort((a, b) => a.priority -  b.priority);
  }

  change() {
    // const todo = document.querySelectorAll('app-todo');
    // this.todo?.changes.subscribe(values => {
    //   console.log(values);
      
    // })
    this.todoData = { ...this.todoData, description: 'ngOnChanges' };
  }

  addTodo() {
    // this.todoData = TODO_DATA.filter(item => item.id < 5);
  }
}
