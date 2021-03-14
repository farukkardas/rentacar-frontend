import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from "../models/car";
@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "http://localhost:61198/api/";
  constructor(private httpClient:HttpClient) { }

  getCars() : Observable<ListResponseModel<Car>>{
    let getAllPath = this.apiUrl + "cars/getcardetail"
    return this.httpClient.get<ListResponseModel<Car>>(getAllPath);
  }
  
  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbybrandid?brandId="+ brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}