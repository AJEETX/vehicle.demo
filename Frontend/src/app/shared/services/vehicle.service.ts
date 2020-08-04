import {Vehicle} from '../model/vehicle.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

constructor(private http: HttpClient, private dataservice: DataService) { }

  getVehicleTypes() {
    return this.http.get<string[]>(environment.baseUrl + '/types');
  }

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(environment.baseUrl);
  }
  getVehicleProperties(type: string) {
    return this.http.get(environment.baseUrl + '/' + type).subscribe(
        (response: any) => {
          this.dataservice.setVehicleProps(response);
        });
  }

  addVehicle(newVehicle: Vehicle): Observable<any> {
    return this.http.post<any>(environment.baseUrl, newVehicle);
  }
}
