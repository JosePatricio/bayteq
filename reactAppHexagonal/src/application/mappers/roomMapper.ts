import { RoomModel } from "../models";
import { Room } from "../../domain/entities";

export function entityToModel(entity:Room):RoomModel {
    const model:RoomModel={...entity};
    return model;
}

export function modelToEntity(model:RoomModel):Room {
    const entity:RoomModel={...model};
    return entity;
} 

export function modelsToEntities(models:RoomModel[]):Room[] {
    const entities:RoomModel[]={...models};
    return entities;
} 
export function entitiesToModels(entities:Room[]):RoomModel[] {
    let models:RoomModel[]={...entities};
   models= Object.entries(models).map(([key, value]) => (value))
    return models;
}