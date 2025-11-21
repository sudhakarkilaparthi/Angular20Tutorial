import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {

  http = inject(HttpClient);
  userList: any = [];
  todoList: any = [];
  bookingUserList: any = [];

  ngOnInit() {
    this.getUsers();
    this.getTodoItems();
    this.getAllBusBookingUsers();
  }


  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result: any) => {
      this.userList = result;
    });
  }

  getTodoItems() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((res: any) => {
      this.todoList = res;
    });
  }

  getAllBusBookingUsers() {
    return this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetAllUsers').subscribe((response: any) => {
      this.bookingUserList = response.data;
    });
  }

} 
