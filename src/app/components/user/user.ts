import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {

  http = inject(HttpClient);
  usersList: any = [];

  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers').subscribe((result: any) => {
      this.usersList = result;
    });
  }

  OnSaveUser() {
    debugger;
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', this.userObj).subscribe({
      next: (result) => {
        debugger;
        alert("User Registered Successfully");
        this.getUsers();
      },
      error: (error) => {
        debugger;
        alert("Error:" + JSON.stringify(error));
      }
    });

  }
}
