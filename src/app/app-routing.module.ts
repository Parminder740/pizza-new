import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { FacebookComponent } from "./facebook/facebook.component";
import { CartComponent } from './cart/cart.component';
import { PaypalComponent } from './paypal/paypal.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReciptComponent } from './recipt/recipt.component';
const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: "userprofile", component: UserProfileComponent
  },
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "facebook", component: FacebookComponent
  },
  {
    path: "cart", component: CartComponent
  },
  {
    path: "paypal", component: PaypalComponent
  },
  {
    path: "Recipt", component: ReciptComponent  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
