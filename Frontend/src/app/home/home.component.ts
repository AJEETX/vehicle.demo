import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../shared/services/vehicle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errormessage$;
  vehicletypes$;
  customErrorMessage=' Server is down !!!'
  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicletypes$= this.vehicleService.getVehicleTypes();
    this.errormessage$ = this.vehicleService.errorMessage;
  }
}
