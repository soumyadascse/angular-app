import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of, delay } from 'rxjs';
import { TitleCasePipe } from './title-case.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, TitleCasePipe],
  template: `
    <h2>Product List</h2>
    <ul *ngIf="products$ | async as products; else loading">
      <li *ngFor="let product of products">
        {{ product | titleCase }}
      </li>
    </ul>
    <ng-template #loading>Loading...</ng-template>
  `
})
export class ProductListComponent {
  products$: Observable<string[]> = of([
    'iphone 15 pro max',
    'samsung galaxy ultra',
    'macbook pro m3'
  ]).pipe(delay(3500)); // simulate async API
}

