import {Component, Input, NgModule} from '@angular/core';
import {ChickenModel} from '../../models/chicken';
import { DecimalPipe } from '@angular/common';
import {CartService} from '../../services/cart/cart.service';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [
    DecimalPipe,
    RouterLink,
    MatButton
  ],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css',
  providers: [DecimalPipe]
})
export class ListProductComponent {
  @Input() chicken!: ChickenModel;

  constructor(protected cartService: CartService) {
  }
}
