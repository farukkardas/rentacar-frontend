import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Car } from "src/app/models/car";
import { CarService } from "src/app/services/car.service";
import { DomSanitizer } from "@angular/platform-browser";
import { isBuffer } from "util";
import { Color } from "src/app/models/color";
import { ColorService } from "src/app/services/color.service";
import { BrandService } from "src/app/services/brand.service";
import { Brand } from "src/app/models/brand";
import { CarFilterDto } from 'src/app/models/carFilterDto';

@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.scss"],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  colors: Color[] = [];
  brands: Brand[] = [];
  dataLoaded = false;
  sanitizer: any;
  filterText: "";
  selectedBrand: string = '';
  selectedColor: string = '';
  constructor(
    private carService: CarService,
    sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService,
    private brandService:BrandService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["brandName"]) {
        this.getCarsByBrandName(params["brandName"]);
      } else if (params["colorName"]) {
        this.getCarsByColorName(params["colorName"]);
      } else {
        this.getCars();
        this.getColors();
        this.getBrands();
      }
    });
  }

  transform(value: any, prefix = "") {
    return this.sanitizer.bypassSecurityTrustUrl(prefix + value);
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }
  getCarsByBrandName(brandName: string) {
    this.carService.getCarsByBrandName(brandName).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColorName(colorName: string) {
    this.carService.getCarsByColorName(colorName).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarDetailsById(id: number) {
    this.carService.getCarDetailsById(id).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByFilters(colorName: string, brandName: string) {
    console.log('getCarDetailsByFilters run.');

    let carFilterDto: CarFilterDto = new CarFilterDto();
    carFilterDto.brandName = brandName;
    carFilterDto.colorName = colorName;

    this.carService.getCarDetailsByFilters(carFilterDto).subscribe(
      (response) => {
        this.cars = [];
      });
  }
}