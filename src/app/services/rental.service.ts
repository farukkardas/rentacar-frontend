import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental} from "../models/rental";
import { SingleResponseModel } from '../models/singleResponseModel';
@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "http://localhost:61198/api/rentals/";

  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl + "getrentaldetail");
  }

  addRetntals(rentalModel:Rental):Observable<SingleResponseModel<Rental>> {
    return this.httpClient.post<SingleResponseModel<Rental>>(this.apiUrl + "login",rentalModel);
  }
}