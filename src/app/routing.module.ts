import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { UserFormComponent } from './user-form/user-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PopularShowComponent } from './popular-show/popular-show.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantInfoComponent } from './restaurant-info/restaurant-info.component';
import { RestuarantDetailComponent } from './restuarant-detail/restuarant-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [

  {path: '', component: HomePageComponent},
  {path: 'restaurant-list', component: RestaurantListComponent},
  {path: 'restaurant-menu/:id', component: RestuarantDetailComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'owner-register', component: UserFormComponent},
  {path: 'owner-login', component: UserFormComponent},
  {path: '', component: PopularShowComponent, outlet: 'appRight'},
  {path: 'customer-register', component: UserFormComponent, outlet: 'appRight'},
  {path: 'driver-register', component: UserFormComponent, outlet: 'appRight'},
  {path: 'customer-login', component: UserFormComponent, outlet: 'appRight'},
  {path: 'driver-login', component: UserFormComponent, outlet: 'appRight'},
  {path: 'restaurant-info/:id', component: RestaurantInfoComponent, outlet: 'appRight'},
  {path: 'shopping-cart', component: ShoppingCartComponent, outlet: 'appRight'}
/*
  {path: '', component: HomePageComponent},
  {path: '', component: PopularShowComponent, outlet: 'appRight'},
  {path: 'customer-login', component: HomePageComponent},
  {path: 'customer-login', component: UserFormComponent, outlet: 'appRight'},
  {path: 'customer-register', component: HomePageComponent},
  {path: 'customer-register', component: UserFormComponent, outlet: 'appRight'},
  {path: 'driver-login', component: HomePageComponent},
  {path: 'driver-login', component: UserFormComponent, outlet: 'appRight'},
  {path: 'driver-register', component: HomePageComponent},
  {path: 'driver-register', component: UserFormComponent, outlet: 'appRight'},
  {path: 'owner-login', component: HomePageComponent},
  {path: 'owner-login', component: UserFormComponent, outlet: 'appRight'},
  {path: 'owner-register', component: HomePageComponent},
  {path: 'owner-register', component: UserFormComponent, outlet: 'appRight'},
  {path: 'restaurants/:id', component: RestaurantListComponent},
  {path: 'restaurants/:id', component: RestaurantInfoComponent, outlet: 'appRight'},
  {path: 'restuarants/:id/order', component: RestuarantDetailComponent},
  {path: 'restuarants/:id/order', component: ShoppingCartComponent, outlet: 'appRight'}
*/
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);