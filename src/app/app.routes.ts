import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
    {path: "",component: LoginComponent},
    {path: "lessonlist",component: LessonsListComponent},
    {path: "signup",component: SignUpComponent},
];
