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

  OnReset() {
    this.userObj = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    }
  }
  OnEditUser(user: any) {
    this.userObj = user;
  }

  OnUpdateUser() {
    this.userObj.createdDate = new Date();
    this.http.put('https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=' + this.userObj.userId, this.userObj).subscribe({
      next: (result) => {
        alert("User Updated Successfully");
        this.getUsers();
      }, error: (error) => {
        alert("Error:" + error.error.message);
      }
    })
  }

  OnDeleteUser(userId: number) {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    this.http.delete('https://api.freeprojectapi.com/api/GoalTracker/deleteUser?id=' + userId).subscribe({
      next: (result) => {
        alert("User Deleted Successfully");
        this.getUsers();
      }, error: (error) => {
        alert("Error:" + error.error.message);
      }
    })
  }

}
