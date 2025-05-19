import { CanActivateFn } from '@angular/router';

export const teacherGuard: CanActivateFn = (route, state) => {
  let role = localStorage.getItem("role");
  if(role == "teacher")
    return true;
 // alert("הגישה רק למורות")
  return false;
};
