import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  users = [
    {
      "id": 1,
      "name": "Dina Cohen",
      "password": "abc123",
      "role": "teacher"
    },
    {
      "id": 2,
      "name": "Sarah Levy",
      "password": "s3cr3t",
      "role": "secretary"
    },
    {
      "id": 3,
      "name": "Miriam Katz",
      "password": "pass456",
      "role": "teacher"
    },
    {
      "id": 4,
      "name": "Tzipi Goldstein",
      "password": "y0sef!",
      "role": "secretary"
    },
    {
      "id": 5,
      "name": "Esther Rosen",
      "password": "e$ther1",
      "role": "teacher"
    },
    {
      "id": 6,
      "name": "Malka Schwartz",
      "password": "Ari3l@",
      "role": "secretary"
    },
    {
      "id": 7,
      "name": "Rachel Friedman",
      "password": "Rach3l2",
      "role": "teacher"
    },
    {
      "id": 8,
      "name": "Avigail Weiss",
      "password": "s4mmy!",
      "role": "secretary"
    },
    {
      "id": 9,
      "name": "Leah Stein",
      "password": "l3ahSt!",
      "role": "teacher"
    },
    {
      "id": 10,
      "name": "Rivka Silverman",
      "password": "A4ron!",
      "role": "secretary"
    },
    {
      "id": 11,
      "name": "Tova Green",
      "password": "T0va@1",
      "role": "teacher"
    },
    {
      "id": 12,
      "name": "Tamar Adler",
      "password": "Dani3l",
      "role": "secretary"
    },
    {
      "id": 13,
      "name": "Naomi Klein",
      "password": "N@omi2",
      "role": "teacher"
    },
    {
      "id": 14,
      "name": "Elisheva Ben-dov",
      "password": "EliB3n",
      "role": "secretary"
    },
    {
      "id": 15,
      "name": "Hannah Shapiro",
      "password": "H4nnah!",
      "role": "teacher"
    },
    {
      "id": 16,
      "name": "Miryam Kaplan",
      "password": "M0she@",
      "role": "secretary"
    },
    {
      "id": 17,
      "name": "Dina Rosenberg",
      "password": "D1naR!",
      "role": "teacher"
    },
    {
      "id": 18,
      "name": "Shlomit Horowitz",
      "password": "Shl0m0",
      "role": "secretary"
    },
    {
      "id": 19,
      "name": "Yaffa Bernstein",
      "password": "Y@ffa1",
      "role": "teacher"
    },
    {
      "id": 20,
      "name": "Yeudit Barak",
      "password": "Yitzh@k",
      "role": "secretary"
    }
  ]

  getUsers() {
    return this.users;
  }
  getUser(userDetails: any){    
    return this.users.find(u => u.name == userDetails.name && u.password == userDetails.password);
  }
}
