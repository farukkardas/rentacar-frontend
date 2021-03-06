import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-shape-star",
    class: "",
  },
  {
    path: "/colors",
    title: "Colors",
    rtlTitle: "إخطارات",
    icon: "icon-palette",
    class: "",
  },
  {
    path: "/brands",
    title: "Brands",
    rtlTitle: "قائمة الجدول",
    icon: "icon-notes",
    class: "",
  },
  {
    path: "/customers",
    title: "Customers",
    rtlTitle: "طباعة",
    icon: "icon-wallet-43",
    class: "",
  },
  {
    path: "/cars",
    title: "Rental Vehicles",
    rtlTitle: "خرائط",
    icon: "icon-bus-front-12",
    class: "",
  },
  {
    path: "/rentals",
    title: "Rented Vehicles",
    rtlTitle: "خرائط",
    icon: "icon-coins",
    class: "",
  },
  // {
  //   path: "/icons",
  //   title: "Icons",
  //   rtlTitle: "الرموز",
  //   icon: "icon-atom",
  //   class: "",
  // },

  // {
  //   path: "/user",
  //   title: "User Profile",
  //   rtlTitle: "ملف تعريفي للمستخدم",
  //   icon: "icon-single-02",
  //   class: "",
  // },

  // {
  //   path: "/rtl",
  //   title: "RTL Support",
  //   rtlTitle: "ار تي ال",
  //   icon: "icon-world",
  //   class: "",
  // },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
