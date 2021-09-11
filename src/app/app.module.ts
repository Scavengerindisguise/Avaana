import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './view/landing-page/landing-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ButtonComponent } from './components/button/button.component';
import { HealthCardComponent } from './components/health-card/health-card.component';
import { WelcomePageComponent } from './view/welcome-page/welcome-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavigationComponent,
    ButtonComponent,
    HealthCardComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
