import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './components/eployee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CustomRadioComponent } from './components/custom-radio.component';
import { CustomCheckboxComponent } from './components/custom-checkbox.component';
import { CustomSelectComponent } from './components/custom-select.component';
import { ProductListComponent } from './components/product-list.component';
import { ChangeDetectionPracticeComponent } from './change-detection-practice/change-detection-practice.component';
import { AppConfigService } from './core/app-config.service';
import { SignalsComponent } from './components/signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeListComponent, ReactiveFormsModule, CustomRadioComponent, CustomCheckboxComponent, CustomSelectComponent, ProductListComponent, ChangeDetectionPracticeComponent, SignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-18-demo';
  form: any;
  apiBaseUrl: any;

  constructor(public fb: FormBuilder, private configService: AppConfigService) {
    this.form = this.fb.group({
      agree: [false],
      gender: ['Male'],
      country: ['India']
    });
  }

  submit() {

  }
  
  ngOnInit() {
    this.apiBaseUrl = this.configService.getConfig()?.apiBaseUrl;
  }
}
