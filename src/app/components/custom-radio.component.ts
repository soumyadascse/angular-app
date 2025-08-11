import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-radio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label *ngFor="let option of options">
      <input
        type="radio"
        [value]="option"
        [checked]="value === option"
        (change)="select(option)"
        name="customRadio"
      />
      {{ option }}
    </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomRadioComponent),
      multi: true
    }
  ]
})
export class CustomRadioComponent implements ControlValueAccessor {
  @Input() options: string[] = [];
  value: string = '';
  onChange = (val: string) => {};
  onTouched = () => {};

  select(option: string) {
    this.value = option;
    this.onChange(option);
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
