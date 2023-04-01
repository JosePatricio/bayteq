import { Reservation } from "../../entities"

export interface IGetReservations {
    execute(): (dispatch: any) => Promise<void>
}

export interface iCheckIn {
    execute(entity: Reservation): (dispatch: any) => Promise<void>
}

export interface iCheckOut {
    execute(entity: Reservation): (dispatch: any) => Promise<void>
}
