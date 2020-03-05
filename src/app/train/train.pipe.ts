import { Pipe, PipeTransform } from '@angular/core';
import { Train } from '../model/Train';

@Pipe({
  name: 'train'
})
export class TrainPipe implements PipeTransform {

  transform(
    trainData : Train[],
    // hotelfacilityData : Hotelfacility[],
    dari:String,
    ke:String,
    classes: String,
    depart: String,
    arrive:String,
    types:String,
    sorted:String
    ): Train[]{
    if(dari && ke){
      console.log(dari +" "+ ke)
          return trainData.filter(Train => Train.train_depart_location.toLowerCase().indexOf(dari.toLowerCase()) !== -1
          && Train.train_arrive_location.toLowerCase().indexOf(ke.toLowerCase()) !== -1)
    }
    if(classes){
      return trainData.filter(Train => Train.train_class.toLowerCase().includes(classes.toString()))
    }
    if(depart){
      return trainData.filter(Train => Train.train_depart_time.toLowerCase().includes(depart.toString()))
    }
    if(arrive){
      return trainData.filter(Train => Train.train_arrive_time.toLowerCase().includes(arrive.toString()))
    }
    if(types){
      // console.log(types.toLowerCase())
      // console.log(trainData[1].train_type.toLowerCase())
      return trainData.filter(Train => Train.train_type.toLowerCase().includes(types.toString()))
    }

    if(sorted == "tipe"){
      return trainData.sort((a,b) => a.train_type < b.train_type ? -1 : 1)
    }else if(sorted == "durasi"){
      return trainData.sort((a,b) => a.train_duration - b.train_duration)
    }else if(sorted == "harga"){
      return trainData.sort((a,b) => a.train_detail_price - b.train_detail_price)
    }else if(sorted == "kelas"){
      return trainData.sort((a,b) => a.train_class < b.train_class ? -1 : 1)
    }




    return trainData;

}
}
