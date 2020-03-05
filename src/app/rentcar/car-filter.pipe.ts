import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../model/Cars';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(
    carData : Car[],
    // hotelfacilityData : Hotelfacility[],
    // location:String,
    // dari:String,
    place:String,
    capacity: number,
    price: number,
    model:String,

    brand:String,
    sorted:String
    ): Car[]{
    if(place){
          return carData.filter(car => car.car_location.toLowerCase().indexOf(place.toLowerCase()) !== -1)
    }
    if(capacity){
      return carData.filter(Car => Car.car_passenger > capacity)
    }
    if(price){
      return carData.filter(car => car.car_price > price)
    }
    if(model){
      return carData.filter(car => car.car_model.toLowerCase().includes(model.toString()))
    }
    if(brand){
      // console.log(types.toLowerCase())
      // console.log(carData[1].car_type.toLowerCase())
      return carData.filter(car => car.car_model.toLowerCase().includes(brand.toString()))
    }

    if(sorted == "price"){
      return carData.sort((a,b) => a.car_price < b.car_price ? -1 : 1)
    }else if(sorted == "model"){
      return carData.sort((a,b) => a.car_model < b.car_model ? -1 : 1)
    }else if(sorted == "capacity"){
      return carData.sort((a,b) => a.car_passenger < b.car_passenger ? -1 : 1)
    }




    return carData;
  }
}
