import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ContentChildren, DoCheck, ElementRef, EventEmitter, Input, LOCALE_ID, OnChanges, OnDestroy, OnInit, Output, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { NTodo } from '../../models/todo.model';
import { CommonModule, registerLocaleData } from '@angular/common';
import spanish from '@angular/common/locales/es';
import { InputComponent } from '../../components/input/input.component';
import { TODO_DATA } from '../../../assets/todo';

registerLocaleData(spanish);

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  constructor() {
    console.log('constructor');
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.divElement);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy', this.divElement);
  }

  @Input({ required: true}) todoData: NTodo.TodoData = TODO_DATA[0];

  @Output() onClickIcon = new EventEmitter<NTodo.TodoData>();

  @ContentChild(InputComponent, { read: ElementRef}) projectedContent?: ElementRef<HTMLElement>;

  @ViewChild('divRef') divElement?: ElementRef;

  get priority(): string {
    switch (this.todoData.priority) {
      case NTodo.Priority.LOW:
        
        return NTodo.PriorityText.LOW;
    
      case NTodo.Priority.MEDIUM:
        
        return NTodo.PriorityText.MEDIUM;
    
      default:
        return NTodo.PriorityText.HIGH;
    }
    
  }

  get progress() {
    return this.todoData.progress * 100;
  }

  get range() {
    if (this.progress >= 0 && this.progress <= NTodo.Range.LOW) {
      return NTodo.RangeText.LOW;
    } else if (this.progress > NTodo.Range.LOW && this.progress <= NTodo.Range.MEDIUM) {
      return NTodo.RangeText.MEDIUM;
    }

    return NTodo.RangeText.HIGH;
  }

  selectContent() {
  }
  
}
