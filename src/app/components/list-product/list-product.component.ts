import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
  @Input() title!: string;
  @Input() name!: string;
  @Input() price!: string;
  @Input() image!: string;
  @Input() size!: string;
}
