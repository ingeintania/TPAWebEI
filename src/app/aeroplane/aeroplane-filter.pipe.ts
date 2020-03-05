import { Pipe, PipeTransform } from '@angular/core';
import { Aeroplane } from '../model/Aeroplane';

@Pipe({
  name: 'aeroplaneFilter'
})
export class AeroplaneFilterPipe implements PipeTransform {

  transform(
    aeroplaneData : Aeroplane[],
    dari:String,
    ke:String,
    transit:String,
    transitDuration:number,
    duration: number,
    depart: String,
    arrive:String,
    company:String,
    facility:String,
    sorted:String
    ): Aeroplane[]{
    if(dari && ke){
      console.log(dari +" "+ ke)
          return aeroplaneData.filter(aeroplane => aeroplane.aeroplane_depart_location.toLowerCase().indexOf(dari.toLowerCase()) !== -1
          && aeroplane.aeroplane_arrive_location.toLowerCase().indexOf(ke.toLowerCase()) !== -1)
    }
    if(transit){
      console.log(transit)
      return aeroplaneData.filter(aeroplane => aeroplane.aeroplane_transit == transit)
    }
    if(transitDuration){
      console.log(transitDuration)
      return aeroplaneData.filter(aeroplane => aeroplane.aeroplane_transit_duration == transitDuration)
    }
    if(duration){
      console.log(duration)
      return aeroplaneData.filter(aeroplane => aeroplane.aeroplane_duration == duration)
    }
    if(depart){
      console.log(depart)
      return aeroplaneData.filter(aeroplane => aeroplane.aeroplane_depart_time.toLowerCase().includes(depart.toString()))
    }
    if(arrive){
      console.log(arrive)
      return aeroplaneData.filter(aeroplane => aeroplane.aeroplane_arrive_time.toLowerCase().includes(arrive.toString()))
    }
    if(company){
      console.log(company)
      // console.log(types.toLowerCase())
      // console.log(aeroplaneData[1].aeroplane_type.toLowerCase())
      return aeroplaneData.filter(aeroplane => aeroplane.aeroplane_company.toLowerCase().includes(company.toString()))
    }

    if(facility){
      console.log(facility)
      // console.log(types.toLowerCase())
      // console.log(aeroplaneData[1].aeroplane_type.toLowerCase())
      return aeroplaneData.filter(aeroplane => aeroplane.aeroplane_facilities.toLowerCase().includes(facility.toString()))
    }

    if(sorted == "transit"){
      return aeroplaneData.sort((a,b) => a.aeroplane_transit < b.aeroplane_transit ? -1 : 1)
    }else if(sorted == "durasiTransit"){
      return aeroplaneData.sort((a,b) => a.aeroplane_transit_duration < b.aeroplane_transit_duration ? -1 : 1)
    }else if(sorted == "waktuPenerbangan"){
      return aeroplaneData.sort((a,b) => a.aeroplane_price < b.aeroplane_price ? -1 : 1)
    }else if(sorted == "maskapai"){
      return aeroplaneData.sort((a,b) => a.aeroplane_company < b.aeroplane_company ? -1 : 1)
    }else if(sorted == "fasilitas"){
      return aeroplaneData.sort((a,b) => a.aeroplane_facilities < b.aeroplane_facilities ? -1 : 1)
    }else if(sorted == "bandara"){
      return aeroplaneData.sort((a,b) => a.aeroplane_depart_location < b.aeroplane_depart_location ? -1 : 1)
    }else if(sorted == "harga"){
      return aeroplaneData.sort((a,b) => a.aeroplane_price < b.aeroplane_price ? -1 : 1)
    }




    return aeroplaneData;

}

}
