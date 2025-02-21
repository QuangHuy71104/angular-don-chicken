import {Component, OnInit} from '@angular/core';
import {ButtonRightComponent} from "../../components/button-right/button-right.component";
import {CheckoutComponent} from "../../components/checkout/checkout.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {ListProductComponent} from "../../components/list-product/list-product.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {UnderNavbarComponent} from "../../components/under-navbar/under-navbar.component";
import {ChickenService} from '../../services/chicken/chicken.service';
import {ChickenModel} from '../../models/chicken';

@Component({
  selector: 'app-menu',
  standalone: true,
    imports: [
        ButtonRightComponent,
        CheckoutComponent,
        FooterComponent,
        ListProductComponent,
        NavbarComponent,
        RouterOutlet,
        SidebarComponent,
        UnderNavbarComponent
    ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  chickens!: ChickenModel[];
  constructor(protected chickenService: ChickenService) {
  }
  ngOnInit() {
    this.chickens = this.chickenService.chickens;
  }

  protected readonly ChickenService = ChickenService;
}
