import { ReservationModel } from "../models";
import { Reservation } from "../../domain/entities";

export function entityToModel(entity:Reservation):ReservationModel {
    const model:ReservationModel={...entity,ROOM_NUMBER:entity.ROOM_NUMBER!};
    return model;
}

export function modelToEntity(model:ReservationModel):Reservation {
    const entity:Reservation={...model};
    return entity;
} 

export function modelsToEntities(models:ReservationModel[]):Reservation[] {
    const entities:ReservationModel[]={...models};
    return entities;
} 
export function entitiesToModels(entities:Reservation[]):ReservationModel[] {
    let models:ReservationModel[]={...entities};
   models= Object.entries(models).map(([key, value]) => (value))
    return models;
}