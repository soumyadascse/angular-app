import { CommonModule } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label>
      <input type="checkbox" [checked]="value" (change)="toggle($event)" />
      Agree to Terms
    </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomCheckboxComponent),
      multi: true
    }
  ]
})
export class CustomCheckboxComponent implements ControlValueAccessor {
  value = false;
  onChange = (val: boolean) => {};
  onTouched = () => {};

  toggle(event: any) {
    this.value = event.target.checked;
    this.onChange(this.value);
    this.onTouched();
  }

  writeValue(val: boolean): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
