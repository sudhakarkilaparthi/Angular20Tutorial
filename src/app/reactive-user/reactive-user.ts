import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css',
})
export class ReactiveUser implements OnInit {

  http = inject(HttpClient);
  usersList: any = [];


  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl(''),
    password: new FormControl(''),
    fullName: new FormControl(''),
    mobileNo: new FormControl('')
  });




  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers').subscribe((result: any) => {
      this.usersList = result;
    });
  }

  OnSaveUser() {
    // debugger;
    const formValues = this.userForm.value;
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', formValues).subscribe({
      next: (result) => {
        // debugger;
        alert("User Registered Successfully");
        this.getUsers();
      },
      error: (error) => {
        // debugger;
        alert("Error:" + JSON.stringify(error));
      }
    });
  }

  OnReset() {

  }
  OnEditUser(user: any) {
    //this.userObj = user;
  }

  OnUpdateUser() {
    // this.userObj.createdDate = new Date();
    // this.http.put('https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=' + this.userObj.userId, this.userObj).subscribe({
    //   next: (result) => {
    //     alert("User Updated Successfully");
    //     this.getUsers();
    //   }, error: (error) => {
    //     alert("Error:" + error.error.message);
    //   }
    // })
  }

  OnDeleteUser(userId: number) {
    // const confirmDelete = confirm("Are you sure you want to delete this user?");
    // this.http.delete('https://api.freeprojectapi.com/api/GoalTracker/deleteUser?id=' + userId).subscribe({
    //   next: (result) => {
    //     alert("User Deleted Successfully");
    //     this.getUsers();
    //   }, error: (error) => {
    //     alert("Error:" + error.error.message);
    //   }
    // })
  }

}
