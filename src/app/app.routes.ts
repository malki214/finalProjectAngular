import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { teacherGuard } from './guard/teacher.guard';
import { secretaryGuard } from './guard/secretary.guard';

export const routes: Routes = [
    {path: "",component: LoginComponent},
    {path: "lessonlist",component: LessonsListComponent, canActivate: [teacherGuard]},
    {path: "signup",component: SignUpComponent, canActivate: [secretaryGuard]},
];
