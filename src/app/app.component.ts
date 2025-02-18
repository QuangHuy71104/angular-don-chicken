import {Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ListProductComponent} from './components/list-product/list-product.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ListProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-don-chicken';

  productNewMenu  = [
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
},
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
  ];
  productChickenDishes  = [
    {
    image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
    name: 'Ayam Bakar',
    size: 'S',
    price: '100',
    },
    {
    image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
    name: 'Ayam Bakar',
    size: 'S',
    price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
  ];
  productKoreanFood  = [
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    ];
  productComboSets  = [
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
  ];
  productSaladFries  = [
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    {
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: '100',
    },
    ];
    productBeverages  = [
      {
        image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
        name: 'Ayam Bakar',
        size: 'S',
        price: '100',
      },
      {
        image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
        name: 'Ayam Bakar',
        size: 'S',
        price: '100',
      },
      {
        image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
        name: 'Ayam Bakar',
        size: 'S',
        price: '100',
      },
      {
        image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
        name: 'Ayam Bakar',
        size: 'S',
        price: '100',
      },
      {
        image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
        name: 'Ayam Bakar',
        size: 'S',
        price: '100',
      },
      {
        image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
        name: 'Ayam Bakar',
        size: 'S',
        price: '100',
      },
      {
        image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
        name: 'Ayam Bakar',
        size: 'S',
        price: '100',
      },
  ];
}

