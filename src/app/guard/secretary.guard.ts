
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class secretaryGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
     let role = localStorage.getItem("role");
    if(role == "secretary"){
      return true;
    } else {
      alert("אין לך הרשאה של מזכירה")
      this.router.navigate(['/']);
      return false;
    }
  }
}