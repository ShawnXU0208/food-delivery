import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerService } from './services/customer.service';
import { FormSideComponent } from './form/form-side/form-side.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RestuarantItemComponent } from './restuarant-item/restuarant-item.component';
import { RestuarantDetailComponent } from './restuarant-detail/restuarant-detail.component';
import { DataService } from './services/data.service';
import { MenuOfCategoryComponent } from './menu-of-category/menu-of-category.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { NoSanitizePipe } from './no-sanitize.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { RequestsHandler } from './requests-handler';
import { FormAlertsComponent } from './form/form-alerts/form-alerts.component';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';
import { TimePipe } from './time.pipe';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(DataService),
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      //{path: 'register', component: CustomerRegisterComponent},
      //{path: 'login', component: CustomerLoginComponent},
      {path: 'customer/login', component: UserFormComponent},
      {path: 'customer/register', component: UserFormComponent},
      {path: 'driver/login', component: UserFormComponent},
      {path: 'driver/register', component: UserFormComponent},
      {path: 'owner/login', component: UserFormComponent},
      {path: 'owner/register', component: UserFormComponent},
      {path: 'restuarant/:id', component: RestuarantDetailComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'dashboard', component: RestaurantDashboardComponent}
    ])
  ],

  declarations: [
    AppComponent, 
    HeaderComponent, 
    FormSideComponent,
    HomePageComponent,
    RestuarantItemComponent,
    RestuarantDetailComponent,
    MenuOfCategoryComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    CartItemComponent,
    NoSanitizePipe,
    CheckoutComponent,
    FormAlertsComponent,
    RestaurantDashboardComponent,
    TimePipe,
    UserFormComponent
  ],

  bootstrap:    [ AppComponent ],

  providers: [
    CustomerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestsHandler,
      multi: true
    }
  ]
})
export class AppModule { }
