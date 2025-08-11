import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  counter = signal(0);
  message = signal<string[]>([]);

  increment() {
    this.counter.update(value => value + 1);
  }

  decrement() {
    this.counter.update(value => value - 1);
  }

}
