import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "@app/_services/token-storage.service";
import { CartService } from '@app/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminFeatures = false;
  showModeratorFeatures = false;
  username?: string;

  quantity: number = 0;

  constructor(private tokenStorageService: TokenStorageService, private cartService: CartService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminFeatures = this.roles.includes('ROLE_ADMIN');
      this.showModeratorFeatures = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

    this.cartService.getCartBadgeQuantity().subscribe(cartQuantity => {
      this.quantity = cartQuantity;
    });
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
