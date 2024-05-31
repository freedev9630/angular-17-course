import { Pipe, PipeTransform } from '@angular/core';
import { NTodo } from '../models/todo.model';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(todos: NTodo.TodoData[], searchText: string): NTodo.TodoData[] {    
    if (!searchText) return todos;
    
    return todos.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()) || item.description.toLowerCase().includes(searchText.toLowerCase()));
  }

}
