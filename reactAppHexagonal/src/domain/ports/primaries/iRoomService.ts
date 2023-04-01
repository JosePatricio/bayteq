import { Room } from "../../entities"

export interface IGetRooms {
    execute(): (dispatch: any) => Promise<void>
}



