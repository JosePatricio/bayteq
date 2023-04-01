import { entitiesToModels } from "../../application/mappers/reservationMapper";
import { ReservationRepository } from "../../infrastructure";
import { Reservation } from "../entities";
import { iCheckIn, iCheckOut, IGetReservations } from "../ports/primaries";
import { ActionTypes } from "./types";

export class GetReservations implements IGetReservations {
    private reservationRepository: ReservationRepository;
    constructor() {
        this.reservationRepository = new ReservationRepository();
    }
    execute(): (dispatch: any) => Promise<void> {
        return async dispatch => {
            const {GET_RESERVATIONS_REQUEST, GET_RESERVATIONS_SUCCESS, GET_RESERVATIONS_FAIL} = ActionTypes
            dispatch({
                type: GET_RESERVATIONS_REQUEST
            })
            try {
               const entities: Reservation[] = await this.reservationRepository.getReservations();
               dispatch({
                    type: GET_RESERVATIONS_SUCCESS,
                    payload: entitiesToModels(entities)
                })
            } catch (e) {
                dispatch({
                    type: GET_RESERVATIONS_FAIL,
                    e
                })
            }
        }
    }
}




export class CheckIn implements iCheckIn {
    private reservationRepository: ReservationRepository;
    constructor() {
        this.reservationRepository = new ReservationRepository();
    }
    execute(entity?: Reservation): (dispatch: any) => Promise<void> {
        return async dispatch => {
            const {GET_RESERVATIONS_REQUEST, GET_RESERVATIONS_SUCCESS, GET_RESERVATIONS_FAIL} = ActionTypes
            dispatch({
                type: GET_RESERVATIONS_REQUEST
            })
            try {
               const response = await this.reservationRepository.checkIn(entity!);

               let entities: Reservation[] =[];
               if(response==true){
                 entities= await this.reservationRepository.getReservations();
                 console.log('CONSULTARR  ',entities);
                 dispatch({
                    type: GET_RESERVATIONS_SUCCESS,
                    payload: entitiesToModels(entities)
                }) 
                }else{
                    alert('Room #'+entity?.ROOM_NUMBER+' currently not available, It will be available on '+entity?.CHECKOUT)
                    throw false;
                }
             
            } catch (e) {

                dispatch({
                    type: GET_RESERVATIONS_FAIL,
                    e
                })
            }
        }
    }
}

export class CheckOut implements iCheckOut {
    private reservationRepository: ReservationRepository;
    constructor() {
        this.reservationRepository = new ReservationRepository();
    }
    execute(entity?:Reservation): (dispatch: any) => Promise<void> {
        return async dispatch => {
            const {GET_RESERVATIONS_REQUEST, GET_RESERVATIONS_SUCCESS, GET_RESERVATIONS_FAIL} = ActionTypes
            dispatch({
                type: GET_RESERVATIONS_REQUEST
            })
            try {
               const response = await this.reservationRepository.checkOut(entity!);

                let entities: Reservation[] =[];
               if(response){
                 entities= await this.reservationRepository.getReservations();
               } 
               dispatch({
                    type: GET_RESERVATIONS_SUCCESS,
                    payload: entitiesToModels(entities)
                })
            } catch (e) {
                dispatch({
                    type: GET_RESERVATIONS_FAIL,
                    e
                })
            }
        }
    }
}


