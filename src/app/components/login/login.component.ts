import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userDetails: FormGroup;

  constructor(private fb: FormBuilder, public usersService: UsersService,public router: Router){

    this.userDetails = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    })

  }

  checkUser(){
    if(this.userDetails.controls["name"].invalid)
      alert("Please enter a name");
    else if(this.userDetails.controls["password"].invalid)
      alert("Please enter a password of 6-8 characters");
    else 
      this.checkRole();
  }

  checkRole(){
    const currentUser = this.usersService.getUser(this.userDetails.value);
    
    if(currentUser == null)
      alert("Incorect name or password")
    if(currentUser?.role == "teacher")
      this.router.navigate(['/lessonlist']);
    else if(currentUser?.role == "secretary")
    this.router.navigate(['/signup']);
  }
}
