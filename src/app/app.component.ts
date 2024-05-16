import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { NTodo } from './models/todo.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    CommonModule,
    HeaderComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  todos: NTodo.TodosResponse = {totalRecords: 0, data: []};

  constructor(
    private readonly apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getTodos();
  }

  private getTodos() {
    this.apiService.get<NTodo.TodosResponse>().subscribe(val => this.todos = val);
  }

  deleteTodo(item: NTodo.TodoData) {
    this.apiService.delete<NTodo.TodosResponse>(item.id).subscribe(todos => this.todos = todos);
  }

  updateTodo(item : NTodo.TodoData) {
    // this.apiService.put(item, item.id).subscribe(console.log);
    this.apiService.patch({ description: item.description}, item.id).subscribe(console.log);
  }

  addTodo() {
    this.apiService.post({
      "title": "Leer documentación técnica",
      "description": "Investigar y leer la documentación de una nueva tecnología o herramienta relevante para el proyecto.",
      "status": "Por hacer",
      "priority": 3,
      "hidden": false,
      "id": 1,
      "deadLine": "2024-04-07T03:25:54.898Z",
      "color": {
        "status": "#ed4040",
        "priority": "#68db68"
      },
      "class": {
        "status": "to-do",
        "priority": "low"
      },
      "progress": 0.2
    }).subscribe(() => this.getTodos());
  }
}
