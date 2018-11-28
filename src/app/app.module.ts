import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { StepsComponent } from './home/steps/steps.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { AdminComponent } from './admin/admin.component';
import { VendorDetailComponent } from './admin/vendor-detail.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      StepsComponent,
      FooterComponent,
      ScorecardComponent,
      AdminComponent,
      VendorDetailComponent
   ],
   imports: [
      BrowserModule,
      MDBBootstrapModule.forRoot(),
      AppRoutingModule,
      MatTableModule
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
