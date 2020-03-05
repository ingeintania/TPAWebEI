import { PipeTransform, Pipe } from '@angular/core'
import { Train } from '../model/Train'

@Pipe({
  name: 'trainFilter', pure: false
})
export class TrainFilterPipe implements PipeTransform{
  transform(
      trainData : Train[],
      // hotelfacilityData : Hotelfacility[],
      dari:String,
      ke:String,
      classes: String,
      depart: String,
      arrive:String,
      types:String,
      ): Train[]{
      if(dari && ke){
        console.log(dari +" "+ ke)
            return trainData.filter(Train => Train.train_depart_location.toLowerCase().indexOf(dari.toLowerCase()) !== -1
            && Train.train_arrive_location.toLowerCase().indexOf(ke.toLowerCase()) !== -1)
      }
      if(classes){
        return trainData.filter(Train => Train.train_class == classes)
      }
      if(depart){
        return trainData.filter(Train => Train.train_depart_time == depart)
      }
      if(arrive){
        return trainData.filter(Train => Train.train_arrive_time == arrive)
      }
      if(types){
        return trainData.filter(Train => Train.train_type == types)
      }


      return trainData;

  }
}
