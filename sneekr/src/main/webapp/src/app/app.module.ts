import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddItemComponent } from './add-item/add-item.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ProfileComponent } from './profile/profile.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AddToCartComponent } from './item-detail/add-to-cart/add-to-cart.component';
import { GalleryComponent } from './item-detail/gallery/gallery.component';
import { ItemDescriptionComponent } from './item-detail/item-description/item-description.component';
import { ItemOptionsComponent } from './item-detail/item-options/item-options.component';
import { ItemColorSelectorComponent } from './item-detail/item-options/item-color-selector/item-color-selector.component';
import { ItemSizeSelectorComponent } from './item-detail/item-options/item-size-selector/item-size-selector.component';
import { MessagesComponent } from './item-detail/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarComponent,
    OrderComponent,
    CartComponent,
    CheckoutComponent,
    AddItemComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ItemDetailComponent,
    AddToCartComponent,
    GalleryComponent,
    ItemDescriptionComponent,
    ItemOptionsComponent,
    ItemColorSelectorComponent,
    ItemSizeSelectorComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
