import { Component } from '@angular/core';
import {ButtonRightComponent} from '../../components/button-right/button-right.component';
import {CheckoutComponent} from '../../components/checkout/checkout.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {ListProductComponent} from '../../components/list-product/list-product.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {UnderNavbarComponent} from '../../components/under-navbar/under-navbar.component';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    ButtonRightComponent,
    CheckoutComponent,
    FooterComponent,
    ListProductComponent,
    NavbarComponent,
    RouterOutlet,
    SidebarComponent,
    UnderNavbarComponent,
    MatIcon
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

}
