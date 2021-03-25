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
  getCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsById(id:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetailbyid?id=" + id
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsByFilters(carFilterDto: CarFilterDto): Observable<ListResponseModel<Car[]>> {
    let newPath = this.apiUrl + "cars/getcardetailbyfilters" + carFilterDto
    return this.httpClient.post<ListResponseModel<Car[]>>(newPath,carFilterDto);
  }



}