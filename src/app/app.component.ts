import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todos = TODO_DATA;

  constructor() {}

  getTodoInfo(val: NTodo.TodoData) {
    console.log(val);
  }
}
