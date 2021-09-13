import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from "./list/list.component";
import { OrderComponent } from './order/order.component';
import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AddItemComponent } from "./add-item/add-item.component";
import { LoginComponent} from "./login/login.component";
import { RegisterComponent} from "./register/register.component";
import { ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {path: 'listView', component: ListComponent},
  {path: 'order', component: OrderComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'add-item', component: AddItemComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
