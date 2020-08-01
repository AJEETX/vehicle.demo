export enum VehicleType {
  CAR,
  BOAT,
}

export   class VehicleProps {
  Name: string;
  Datatype: string;
  Order: number;
  Regex: string;
  Required: boolean;
  Value: any;

  constructor(public _Name: string, public _Datatype: string,
    public _Order: number, public _Regex: string, public _Required: boolean,public _Value: any) {
    this.Name = _Name;
    this.Datatype = _Datatype;
    this.Order = _Order;
    this.Regex = _Regex;
    this.Required = _Required;
    this.Value = _Value;
  }
}

export  abstract  class Vehicle {
  Id: number;
  Model: string;
  Make: string;
  abstract VehicleType: VehicleType;
}
export class Car extends Vehicle {
  Doors: number;
  Engine: string;
  Wheels: number;
  Bodytype: string;
  VehicleType: VehicleType = VehicleType.CAR;
  constructor(public _Model: string, public _Make: string, public _Doors: number, public _Engine: string,
    public _Wheels: number, public _Bodytype: string) { super();
    this.Model = _Model;
    this.Make = _Make;
    this.Doors = _Doors;
    this.Engine = _Engine;
    this.Wheels = _Wheels;
    this.Bodytype = _Bodytype;
    }
}

export class Boat extends Vehicle {
  Storey: number;
  Seats: number;
  VehicleType: VehicleType = VehicleType.BOAT;

  constructor(public _Model: string, public _Make: string, public _Storey: number,
    public _Seats: number) { super();
    this.Model = _Model;
    this.Make = _Make;
    this.Storey = _Storey;
    this.Seats = _Seats;
    }

}

export class CurrentVehicle {
  Id: number;
  VehicleType: VehicleType;
  constructor(public _id: number, public _vehicleType: VehicleType) {
    this.Id = _id;
    this.VehicleType = _vehicleType;
  }
}
