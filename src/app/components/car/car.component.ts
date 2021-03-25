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
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.scss"],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  colors: Color[] = [];
  brands: Brand[] = [];
  brandForm: FormGroup;
  colorForm:  FormGroup;
  dataLoaded = false;
  sanitizer: any;
  filterText: "";
  constructor(
    private carService: CarService,
    sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService,
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"]);
        this.getColors();
        this.getBrands();
      } else if (params["colorId"]) {
        this.getCarsByColorId(params["colorId"]);
        this.getColors();
        this.getBrands();
      } else {
        this.getCars();
        this.getColors();
        this.getBrands();
      }
    
      this.createColorForm()
      this.createBrandForm()
    });
  }

  transform(value: any, prefix = "") {
    return this.sanitizer.bypassSecurityTrustUrl(prefix + value);
  }

  createColorForm(){
    this.colorForm = this.formBuilder.group({
      color: [""],
    });
  }

  createBrandForm(){
    this.brandForm = this.formBuilder.group({
      brand: [""],
    });

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

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
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

  getBrandSubmit() {
    let brandForm = Object.assign({},this.brandForm.value)

    this.carService.getCarsByBrandId(brandForm).subscribe(response=>{
      this.toastrService.success(response.message)
    },responseError=>console.log(responseError))
  }

  getColorSubmit() {
   let colorForm = Object.assign({},this.colorForm.value)
   
   this.carService.getCarsByColorId(colorForm).subscribe(response=>{
     this.toastrService.success(response.message)
   },responseError=>this.toastrService.error("hata"))
  }
}
