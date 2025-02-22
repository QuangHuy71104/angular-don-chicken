import { Routes } from '@angular/router';
import {StoreComponent} from './pages/store/store.component';
import {NewsComponent} from './pages/news/news.component';
import {MenuComponent} from './pages/menu/menu.component';
import {FranchiseComponent} from './pages/franchise/franchise.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {CartComponent} from './pages/cart/cart.component';
import {DetailComponent} from './pages/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'franchise',
    component: FranchiseComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
];

