import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  
  courseName: string = 'Angular 20 Tutorial';
  productPrice: number = 9999;

  maxLength: number = 5;
  minLength: number = 2;

  constructor() {
    console.log('DataBinding component initialized');
    // this.courseName
  }
}
