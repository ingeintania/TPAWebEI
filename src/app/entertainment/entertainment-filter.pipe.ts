import { PipeTransform, Pipe } from '@angular/core';
import { Entertainment } from '../model/Entertainment';

@Pipe({
    name: 'entertainmentFilter', pure: false
})
export class EntertainmentFilterPipe implements PipeTransform {
    transform(
        entertainmentData: Entertainment[],
        searchTerm:String,
        category: String,
        price: number,
        start_date: String,
        end_date: String,
        sorted:String

    ): Entertainment[] {
        if (searchTerm) {
            console.log(searchTerm)
            return entertainmentData.filter(Entertainment => Entertainment.entertainment_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
        }
        if (category) {
            console.log(category)
            return entertainmentData.filter(Entertainment => Entertainment.entertainment_type.toLowerCase() == category)
        }
        if (price) {
            console.log(price)
            return entertainmentData.filter(Entertainment => Entertainment.entertainment_price > price)
        }
        if (start_date) {
            console.log(start_date)
            return entertainmentData.filter(Entertainment => Entertainment.entertainment_start_date == start_date)
        }
        if (end_date) {
            console.log(end_date)
            return entertainmentData.filter(Entertainment => Entertainment.entertainment_end_date == end_date)
        }


        if(sorted == "terbaru"){
          return entertainmentData.sort((a,b) => a.entertainment_id > b.entertainment_id ? -1 : 1)
        }else if(sorted == "tinggi"){
          return entertainmentData.sort((a,b) => a.entertainment_price > b.entertainment_price ? -1 : 1)
        }else if(sorted == "rendah"){
          return entertainmentData.sort((a,b) => a.entertainment_price < b.entertainment_price ? -1 : 1)
        }else if(sorted == "rekomendasi"){
          return entertainmentData.sort((a,b) => a.entertainment_address > b.entertainment_address ? -1 : 1)
        }



        return entertainmentData;

    }

}
