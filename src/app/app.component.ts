import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './models/todo.model';
import { CommonModule } from '@angular/common';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    CommonModule,
    HighlightedDirective,
    NgxUnlessDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  todoData = TODO_DATA[0];

  constructor() {}
  ngAfterViewInit(): void {
    // console.log(this.highlightedDirective);
  }

  @ViewChild('todoRef', { read: HighlightedDirective}) highlightedDirective!: HighlightedDirective;

  getTodoInfo(val: NTodo.TodoData) {
    console.log(val);
  }

  trackByFn(_index: number, item: NTodo.TodoData) {
    return item.id;
  }

  // orderData() {
  //   this.todoData.sort((a, b) => a.priority -  b.priority);
  // }
  onToggleHighlighted(highlighted: boolean) {
    console.log(highlighted);
  }
}
