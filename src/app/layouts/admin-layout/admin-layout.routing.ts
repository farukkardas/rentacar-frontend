import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { RentalsComponent } from "src/app/pages/rentals/rentals.component";
import { BrandsComponent} from "src/app/pages/brands/brands.component";
import { ColorsComponent } from "src/app/pages/colors/colors.component";
import { CarsComponent } from "src/app/pages/cars/cars.component";
import { CustomersComponent } from "src/app/pages/customers/customers.component";
import { LoginpageComponent } from "src/app/pages/loginpage/loginpage.component";
import { LoginGuard } from "src/app/guards/login.guard";
import { RentalComponent } from "src/app/components/rental/rental.component";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "rentals", component: RentalsComponent , children: [{ path: '', component: RentalComponent }] ,canActivate:[LoginGuard]},
  { path: "brands", component: BrandsComponent },
  { path: "colors", component: ColorsComponent},
  { path: "cars", component: CarsComponent },
  { path: "customers", component: CustomersComponent },
  { path:"cars/brands/:brandId", component:CarsComponent},
  { path:"cars/colors/:colorId", component:CarsComponent},
  { path:"cars/filters/:colorId",component:CarsComponent},
  { path:"cars/filters/:brandId",component:CarsComponent},
  { path:"cars/filters/:colorName/:brandName",component:CarsComponent},
  {path: "login",component:LoginpageComponent}

];
