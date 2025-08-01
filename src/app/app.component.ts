import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './components/eployee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataBindingComponent, EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-18-demo';
}
