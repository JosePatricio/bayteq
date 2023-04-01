import { entitiesToModels } from "../../application/mappers/reservationMapper";
import { RoomRepository } from "../../infrastructure/roomRepository";
import { Reservation } from "../entities";
import { IGetRooms } from "../ports/primaries";
import { ActionTypes } from "./types";

export class GetRooms implements IGetRooms {
    private roomRepository: RoomRepository;
    constructor() {
        this.roomRepository = new RoomRepository();
    }
    execute(): (dispatch: any) => Promise<void> {
        return async dispatch => {
            const {GET_RESERVATIONS_REQUEST, GET_ROOMS_SUCCESS, GET_ROOMS_FAIL} = ActionTypes
            dispatch({
                type: GET_RESERVATIONS_REQUEST
            })
            try {
               const entities: Reservation[] = await this.roomRepository.getRooms();
               dispatch({
                    type: GET_ROOMS_SUCCESS,
                    payload: entitiesToModels(entities)
                })
            } catch (e) {
                dispatch({
                    type: GET_ROOMS_FAIL,
                    e
                })
            }
        }
    }
}


