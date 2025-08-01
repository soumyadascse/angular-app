import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  courseName: string = 'Angular 18';

  inputType = 'checkbox';

  rollNo: number = 123;

  currentDate = new Date();

  constructor() {}
}
