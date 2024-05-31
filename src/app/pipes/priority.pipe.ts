import { Pipe, PipeTransform } from '@angular/core';
import { NTodo } from '../models/todo.model';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'priority',
  standalone: true,
  pure: false
})
export class PriorityPipe implements PipeTransform {
  constructor(
    private translate: TranslateService
  ){}

  transform(priority: number): string {    
    switch (priority) {
      case NTodo.Priority.LOW:
        
        return this.translate.instant('todo.priority.low');
    
      case NTodo.Priority.MEDIUM:
        
      return this.translate.instant('todo.priority.medium');
    
      default:
        return this.translate.instant('todo.priority.high');
    }
  }

}
