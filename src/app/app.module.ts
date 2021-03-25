import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/ComponentsModule";
import { PaymentComponent } from './components/payment/payment.component';
import { RentacarComponent } from './components/rentacar/rentacar.component';
import { LoginComponent } from './components/login/login.component';
import { FormBuilder } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    PaymentComponent,
    RentacarComponent,
    LoginComponent,
  
    
    
  ],
  providers: [
      
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
