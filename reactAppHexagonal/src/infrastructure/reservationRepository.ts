import { Reservation } from "../domain/entities";
import { IReservationRepository } from "../domain/ports/secondaries/iReservationRepository";

export class ReservationRepository implements IReservationRepository {
    baseUrl?: string

    constructor() {
        this.baseUrl= "https://localhost:44362/api/Reservation/";
    }
  
    
   
    
    async checkOut(entity: Reservation): Promise<Reservation> {
        const res=await fetch(`${this.baseUrl}CheckOut`, {
            method: "PUT",
            body: JSON.stringify(entity),
            headers: {
              'Content-Type': 'application/json',
            }
          })
          return res.json()
    }
    async checkIn(entity: Reservation): Promise<boolean> {
          const res = await    fetch(`${this.baseUrl}CheckIn`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(entity)
          }) 
          return res.json()

    }
    
    
    async getReservations(): Promise<Reservation[]> {
        let url:string 
        url =`${this.baseUrl}GetAll`
        const res = await fetch(url) 
        return res.json()
    }    
}