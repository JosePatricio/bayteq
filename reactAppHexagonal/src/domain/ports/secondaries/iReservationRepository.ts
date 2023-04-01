import { Reservation } from "../../entities";

export interface IReservationRepository {
    
    getReservations(): Promise<Reservation[]>
    checkIn(entity:Reservation): Promise<boolean>
    checkOut(entity:Reservation): Promise<Reservation>
    
}