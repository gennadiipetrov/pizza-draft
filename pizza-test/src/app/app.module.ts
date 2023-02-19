import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/header/header.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { PizzaListComponent } from './features/pizza-list/pizza-list.component';
import { PizzaOrderComponent } from './features/pizza-order/pizza-order.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PizzaItemComponent } from './features/pizza-list/pizza-item/pizza-item.component';
import { BurgerComponent } from './pages/header/burger/burger.component';
import { HeaderMenuComponent } from './pages/header/header-menu/header-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    WelcomeComponent,
    PizzaListComponent,
    PizzaOrderComponent,
    PizzaItemComponent,
    BurgerComponent,
    HeaderMenuComponent
  ],
  imports: [
    CoreModule, 
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
