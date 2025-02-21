import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ListProductComponent} from './components/list-product/list-product.component';
import {ButtonRightComponent} from './components/button-right/button-right.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FooterComponent} from './components/footer/footer.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {UnderNavbarComponent} from './components/under-navbar/under-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, UnderNavbarComponent, ButtonRightComponent, CheckoutComponent, FooterComponent, ListProductComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string= 'angular-don-chicken';
}

