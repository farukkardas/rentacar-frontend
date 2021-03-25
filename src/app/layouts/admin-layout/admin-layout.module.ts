import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
// import {FormBuilder,  FormsModule,  ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserComponent } from "../../pages/user/user.component";
import { RentalsComponent } from "../../pages/rentals/rentals.component";
import { BrandsComponent } from "../../pages/brands/brands.component";
import { ColorsComponent } from "src/app/pages/colors/colors.component";
import { CarsComponent } from "src/app/pages/cars/cars.component";
import { CustomersComponent } from "src/app/pages/customers/customers.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrandComponent } from "src/app/components/brand/brand.component";
import { ColorComponent } from "src/app/components/color/color.component";
import { CustomerComponent } from "src/app/components/customer/customer.component";
import { CarComponent } from "src/app/components/car/car.component";
import { RentalComponent } from "src/app/components/rental/rental.component";
import { FilterPipe } from "src/app/pipes/filter.pipe";
import { ColorfilterPipe } from "src/app/pipes/colorfilter.pipe";
import { BrandfilterPipe } from "src/app/pipes/brandfilter.pipe";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    FormBuilder,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    BrandComponent,
    RentalsComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    BrandsComponent,
    ColorsComponent,
    CarsComponent,
    CustomersComponent,
    FilterPipe,
    ColorfilterPipe,
    BrandfilterPipe,

    // RtlComponent
  ],
})
export class AdminLayoutModule {}
