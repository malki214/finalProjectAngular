import { CanActivateFn } from '@angular/router';

export const secretaryGuard: CanActivateFn = (route, state) => {
  let role = localStorage.getItem("role");
  if(role == "secretary")
    return true;
  //alert("הגישה רק למזכירות")
  return false;
};
