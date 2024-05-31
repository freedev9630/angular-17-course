import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = signal(0);

  constructor() { }

  setCounter() {
    this.counter.update(val => val + 1);
  }

  get getCounter() {
    return this.counter();
  }
}
