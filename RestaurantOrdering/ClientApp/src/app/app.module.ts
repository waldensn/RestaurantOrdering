import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { OrderButtonsComponent } from './components/order-buttons/order-buttons.component';
import { FetchOrdersComponent } from './components/fetch-orders/fetch-orders.component';
import { OrderInfoComponent } from './components/order-info/order-info.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CurrencyPipe } from './pipes/currency.pipe';
import { OrderDataService } from './services/order-data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PlaceOrderComponent,
    OrderButtonsComponent,
    FetchOrdersComponent,
    OrderInfoComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'place-order', component: PlaceOrderComponent },
      { path: 'fetch-orders', component: FetchOrdersComponent },
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [OrderDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
