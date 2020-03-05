import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from 'src/app/model/Hotel';

@Pipe({
  name: 'managehotel'
})
export class ManagehotelPipe implements PipeTransform {

   transform(
        hotelData : Hotel[],
        // hotelfacilityData : Hotelfacility[],
        searchTerm: String,
        rating: number,
        area:String,
        price:number,
        facility:String,
        sorted:String
        ): Hotel[]{
        if(searchTerm){
            console.log(searchTerm)
            return hotelData.filter(Hotel => Hotel.hotel_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
        }
        if(rating){
            console.log(rating)
            return hotelData.filter(Hotel => Hotel.hotel_rating_count > rating)
        }
        if(facility){
            console.log(facility)
            return hotelData.filter(Hotel => Hotel.hotel_facilities.toLowerCase().includes(facility.toString()))
        }
        if(price){
            console.log(price)
            return hotelData.filter(Hotel => Hotel.hotel_price > price)
        }
        if(area){
            console.log(area)
            return hotelData.filter(Hotel => Hotel.hotel_address.toLowerCase().includes(area.toString()))
        }


        if(sorted == "rating"){
          return hotelData.sort((a,b) => a.hotel_rating_count < b.hotel_rating_count ? -1 : 1)
        }else if(sorted == "price"){
          return hotelData.sort((a,b) => a.hotel_price - b.hotel_price)
        }else if(sorted == "name"){
          return hotelData.sort((a,b) => a.hotel_name < b.hotel_name ? -1 : 1)
        }

        return hotelData;

    }

}
