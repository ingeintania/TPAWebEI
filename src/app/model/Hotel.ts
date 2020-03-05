import { Hotelfacility } from './Hotelfacility'

export class Hotel{
    hotel_id : number
    hotel_name : string
    hotel_price : number
    hotel_image_path : string
    location_id : number
    hoteltype_id : number
    hotel_address : string
    hotel_latitude : string
    hotel_longitude : string
    hotel_star : number
    hotel_rating_count : number
    hotel_availability : string
    // hotelfacility: Hotelfacility[]
    hotel_facilities: string
}