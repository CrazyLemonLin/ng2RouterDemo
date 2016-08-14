import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { appRoutingProviders,routing} from './app.routing';
import { AppComponent } from './app.component';
import { RouteNavComponent } from './route-nav/route-nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
