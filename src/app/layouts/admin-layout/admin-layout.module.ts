import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "src/app/components/login/login.component";
import { LoginpageComponent } from "src/app/pages/loginpage/loginpage.component";
import { LoginGuard } from "src/app/guards/login.guard";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
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
    LoginComponent,
    LoginpageComponent

    // RtlComponent
  ],
  providers: [LoginGuard]
})
export class AdminLayoutModule {}
