import { Reservation } from "../domain/entities";
import { IRoomRepository } from "../domain/ports/secondaries/iRoomRepository";

export class RoomRepository implements IRoomRepository {
    baseUrl?: string

    constructor() {
        this.baseUrl= "https://localhost:44362/api/Reservation/";
    }
  
    
    
    async getRooms(): Promise<Reservation[]> {
        let url:string 
        url =`${this.baseUrl}GetAllRooms`
        const res = await fetch(url) 
        return res.json()
    }    
}