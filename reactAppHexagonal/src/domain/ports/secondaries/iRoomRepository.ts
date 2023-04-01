import { Room } from "../../entities";

export interface IRoomRepository {
    
    getRooms(): Promise<Room[]>
}