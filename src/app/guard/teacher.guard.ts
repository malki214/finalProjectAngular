
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class teacherGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
     let role = localStorage.getItem("role");
     if(role == "teacher"){
      return true;
    } else {
      alert("אין לך הרשאה של מורה")
      this.router.navigate(['/']);
      return false;
    }
  }
}