import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavegationComponent } from './Components/navegation/navegation.component';
import { LoginComponent } from './Components/login/login.component';
import { TarjetasComponent } from './Components/tarjetas/tarjetas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavegationComponent,
    LoginComponent,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    FormsModule, 
    NgbModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
