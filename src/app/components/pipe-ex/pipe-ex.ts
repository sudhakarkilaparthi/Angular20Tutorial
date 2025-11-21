import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, SlicePipe, JsonPipe, NaPipe],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css',
})
export class PipeEx {
  courseName = 'angular';
  courseDuration = '3 Months';

  currentDate = new Date();

  numberList: number[] = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];

  studentObj: any = {
    id: 101,
    name: 'John Doe',
    age: 25,
    course: 'Angular',
    address: {
      street: '123 Main St',
      city: 'New York',
      country: 'USA',
    },
  };
}
