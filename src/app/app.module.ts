import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet, UrlSerializer } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './services/user.service';
import { FormSideComponent } from './form/form-side/form-side.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RestuarantItemComponent } from './restuarant-item/restuarant-item.component';
import { RestuarantDetailComponent } from './restuarant-detail/restuarant-detail.component';
import { MenuOfCategoryComponent } from './menu-of-category/menu-of-category.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NoSanitizePipe } from './no-sanitize.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { RequestsHandler } from './requests-handler';
import { FormAlertsComponent } from './form/form-alerts/form-alerts.component';
import { TimePipe } from './time.pipe';
import { UserFormComponent } from './user-form/user-form.component';
import { routingModule } from "./routing.module";
import { PopularShowComponent } from './popular-show/popular-show.component';
import { RestaurantInfoComponent } from './restaurant-info/restaurant-info.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { StandardUrlSerializer } from './standard-url-serializer';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    routingModule
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
    NoSanitizePipe,
    CheckoutComponent,
    FormAlertsComponent,
    TimePipe,
    UserFormComponent,
    PopularShowComponent,
    RestaurantInfoComponent,
    RestaurantListComponent
  ],

  bootstrap:    [ AppComponent ],

  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestsHandler,
      multi: true
    },
    TimePipe,
    {
      provide: UrlSerializer,
      useClass: StandardUrlSerializer
    }

  ]
})
export class AppModule { }
