import { Injectable } from '@angular/core';
import { ChickenModel } from '../../models/chicken';

@Injectable({
  providedIn: 'root'
})
export class ChickenService {

  constructor() { }

  viewDetail(id: string) {
    const chicken = this.chickens.find(chicken => chicken.id === parseInt(id, 10));
    return chicken;
  }

  chickens: ChickenModel[] = [
    {
      id: 1,
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Dakgangjeong Chicken',
      size: 'L',
      price: 259000
    },
    {
      id: 2,
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Ayam Bakar',
      size: 'S',
      price: 259000
    },
    {
      id: 3,
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Gà Rán',
      size: 'M',
      price: 199000
    },
    {
      id: 4,
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Gà Nướng',
      size: 'L',
      price: 299000
    },
    {
      id: 5,
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Gà Chiên',
      size: 'S',
      price: 159000
    },
    {
      id: 6,
      image: 'https://donchicken.vn/pub/media/catalog/product/cache/c430e3e26517992a27628ce5995d6769/d/a/dakgangjeong_l_1.jpg',
      name: 'Gà Xào Cay',
      size: 'M',
      price: 219000
    },
  ];
}
