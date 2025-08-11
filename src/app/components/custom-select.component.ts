import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  imports: [CommonModule],
  standalone: true,
  template: `
    <select [value]="value" (change)="select($any($event.target).value)">
      <option *ngFor="let option of options" [value]="option">
        {{ option }}
      </option>
    </select>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    }
  ]
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() options: string[] = [];
  value: string = '';
  onChange = (val: string) => {};
  onTouched = () => {};

  select(val: string) {
    this.value = val;
    this.onChange(val);
    this.onTouched();
  }

  writeValue(val: string): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
