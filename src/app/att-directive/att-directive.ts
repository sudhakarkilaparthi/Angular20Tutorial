import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  div1ClassName = signal<string>("");

  firstName: string = "Sudhakar";
  courseName: string = "Angular 20 tutorial";

  rollNoList = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  studentDetails: any = {
    name: "Sudhakar",
    age: 33,
    city: "Hyderabad",
    state: "Telangana"
  }

  currentDate: Date = new Date();

  isDiv2Green: boolean = false;


  constructor() {
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    // to trigger API calls
    //to subscribe 
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    //to deal with viewChild
    //subscribe
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    //unsubscribe
    //clean up
    //restrict use from navigating away
  }



  setBgClass(className: string) {
    this.div1ClassName.set(className);
  }

  toggleDiv2Bg() {
    this.isDiv2Green = !this.isDiv2Green;
  }
}
