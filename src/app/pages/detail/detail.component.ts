import { Component } from '@angular/core';
import { ButtonRightComponent } from '../../components/button-right/button-right.component';
import { CheckoutComponent } from '../../components/checkout/checkout.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ListProductComponent } from '../../components/list-product/list-product.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { UnderNavbarComponent } from '../../components/under-navbar/under-navbar.component';
import { MatIcon } from '@angular/material/icon';
import { ChickenModel } from '../../models/chicken';
import { ChickenService } from '../../services/chicken/chicken.service';
import {CurrencyPipe, DecimalPipe} from '@angular/common';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    ButtonRightComponent,
    FooterComponent,
    NavbarComponent,
    RouterOutlet,
    SidebarComponent,
    UnderNavbarComponent,
    DecimalPipe,
  ],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  currentChicken!: ChickenModel | undefined;
  chicken: ChickenModel | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private chickenService: ChickenService,
              protected cartService: CartService) {
    const { id } = this.activatedRoute.snapshot.params;
    this.currentChicken = this.chickenService.viewDetail(id);
  }
}
