import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Master {
  constructor(private http: HttpClient) {}

  getSum(num1: number, num2: number) {
    const result = num1 + num2;
    return result;
  }

  getUsers() {
    return this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers');
  }
}
