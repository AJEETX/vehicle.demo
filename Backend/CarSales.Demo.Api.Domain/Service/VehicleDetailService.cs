﻿using CarSales.Demo.Api.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CarSales.Demo.Api.Domain.Service
{
    public interface IVehicleDetailService
    {
        Task<IEnumerable<VehicleDetail>> GetVehicleProperties(VehicleType vehicleType);
        Vehicle GetVehicleType(VehicleType vehicleType);
    }
    partial class VehicleDetailService : IVehicleDetailService
    {
        readonly Dictionary<VehicleType, Vehicle> vehicleDictionary = new Dictionary<VehicleType, Vehicle>();
        public VehicleDetailService()
        {
            vehicleDictionary.Add(VehicleType.CAR, new Car());
            vehicleDictionary.Add(VehicleType.BOAT, new Boat());
        }
        public async Task<IEnumerable<VehicleDetail>> GetVehicleProperties(VehicleType vehicleType)
        {
            IEnumerable<VehicleDetail> vehicleProperties = null;
            try
            {
                vehicleProperties = await Task.Run(() => GetProperties(vehicleType));
            }
            catch
            {
               //log
            }
            return vehicleProperties;

        }
        
        public Vehicle GetVehicleType(VehicleType vehicleType)
        {
            Vehicle vehicle = null;
            if (Enum.IsDefined(typeof(VehicleType),vehicleType))
            {
                vehicle= vehicleDictionary[vehicleType];
            }
            return vehicle;
        }
        private IEnumerable<VehicleDetail> GetProperties(VehicleType vehicleType)
        {
            var vehicle = vehicleDictionary[vehicleType];

            foreach (var prop in vehicle.GetType().GetProperties())
            {
                yield return new VehicleDetail()
                {
                    Value = string.Empty,
                    Name = prop.Name,
                    Datatype = prop.PropertyType.Name,
                    Required = prop.GetCustomAttributes(typeof(RequiredAttribute), true).Any() ? true : false,
                    Order = prop.GetCustomAttributes(typeof(DisplayAttribute), true).Any() ? ((DisplayAttribute)(prop.GetCustomAttributes(typeof(DisplayAttribute), true)[0])).Order : 0,
                    Regex = prop.GetCustomAttributes(typeof(RegularExpressionAttribute), true).Any() ? ((RegularExpressionAttribute)(prop.GetCustomAttributes(typeof(RegularExpressionAttribute), true)[0])).Pattern : ""
                };
            }
        }
    }
}
