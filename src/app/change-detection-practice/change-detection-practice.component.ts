import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { PassFailColorDirectiveDirective } from '../pass-fail-color-directive.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-detection-practice',
  standalone: true,
  imports: [CommonModule, PassFailColorDirectiveDirective],
  templateUrl: './change-detection-practice.component.html',
  styleUrl: './change-detection-practice.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // Use OnPush strategy for better performance
})
export class ChangeDetectionPracticeComponent implements OnInit {
reload() {
throw new Error('Method not implemented.');
}
  http = inject(HttpClient);
  users: any[] = [];
  testSignalData = signal<string>('Initial Signal Data');

  updateSignal() {
    this.testSignalData.set('Updated Signal Data');
    console.log('Signal updated:', this.testSignalData());
  }

  constructor() {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      this.users = data as any[];
      console.log('Users fetched:', this.users);
      setTimeout(() => {
        this.updateSignal(); // Update signal after fetching users
      }, 3000); // Simulate delay
      // this.updateSignal(); // Update signal after fetching users
    })
  }
}
