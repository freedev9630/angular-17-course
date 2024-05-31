import { Pipe, PipeTransform } from '@angular/core';
import { NTodo } from '../models/todo.model';

@Pipe({
  name: 'range',
  standalone: true
})
export class RangePipe implements PipeTransform {

  transform(progress: number): NTodo.RangeText {    
    if (progress >= 0 && progress <= NTodo.Range.LOW) {
      return NTodo.RangeText.LOW;
    } else if (progress > NTodo.Range.LOW && progress <= NTodo.Range.MEDIUM) {
      return NTodo.RangeText.MEDIUM;
    }

    return NTodo.RangeText.HIGH;
  }

}
