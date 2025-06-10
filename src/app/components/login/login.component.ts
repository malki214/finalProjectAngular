import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userDetails: FormGroup;
  error: string = "";


  constructor(private fb: FormBuilder, public usersService: UsersService, public router: Router) {

    this.userDetails = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    })

    if(localStorage.getItem("role")!=null)
      this.checkRole();

  }

  checkUser() {
    if (this.userDetails.controls["name"].invalid)
      this.error = "Please enter a name";
    else if (this.userDetails.controls["password"].invalid)
      this.error = "Please enter a password of 6-8 characters";
    else{
      const currentUser = this.usersService.getUser(this.userDetails.value);

      if (currentUser == null)
        this.error = "Incorect name or password";

      localStorage.setItem("role", currentUser!.role)
      this.checkRole();
    }
      
  }

  checkRole() {
    let role = localStorage.getItem("role");
    if (role == "teacher") {
      this.router.navigate(['/lessonlist']);

    }

    else if (role == "secretary")
      this.router.navigate(['/signup']);
  }
}
