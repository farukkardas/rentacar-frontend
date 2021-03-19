import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from "../models/car";
import { CarFilterDto } from '../models/carFilterDto';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "http://localhost:61198/api/";
  constructor(private httpClient:HttpClient) { }
  getPath: string = "https://localhost:61198/api/cars/getcardetailbyfilters";

  getCars() : Observable<ListResponseModel<Car>>{
    let getAllPath = this.apiUrl + "cars/getcardetail"
    return this.httpClient.get<ListResponseModel<Car>>(getAllPath);
  }
  
  getCarsByBrandName(brandName:string):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetailbrand?brandName="+ brandName
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorName(colorName:string):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetailbycolor?colorName=" + colorName
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsById(id:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetailbyid?id=" + id
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsByFilters(
    carFilterDto: CarFilterDto
  ): Observable<ListResponseModel<Car[]>> {
    return this.httpClient.post<ListResponseModel<Car[]>>(
      `${this.getPath}`, carFilterDto
    );
  }

}