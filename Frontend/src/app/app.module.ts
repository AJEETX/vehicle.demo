import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.router';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicle/vehicles.component';
import { VehicleService} from './shared/services/vehicle.service';
import { DropdownDirective } from './shared/directive/dropdowndirective';
import { FocusDirective } from './shared/directive/focusDirective';
import { ErrorComponent } from './shared/error/error.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './vehicle/addvehicle/add.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    DropdownDirective,
    FocusDirective,
    ErrorComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
