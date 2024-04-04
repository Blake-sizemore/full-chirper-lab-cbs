import { selectQuery, modifyQuery } from "../queryUtil";
import type { RowDataPacket } from "mysql2";

export interface IChirpsRow extends RowDataPacket {
    id: number,
    user_id: string,
    body: string,
    city: string,
    created_at: string
}

// Create Read Update Delete - CRUD

// Read -  get
export function getOne(id: number){
    return selectQuery<IChirpsRow>(`select * from chirps where id=?;`, [id]);
}

export function getAll(){
    return selectQuery<IChirpsRow>(`Select * from chirps;`);
}

// Update - post
export function addChirp(chirpsUser: number, chirpsMessage: string,chirpsCity: string){
    return modifyQuery(`insert into chirps (user_id,message,city) value (?,?,?);`,[chirpsUser,chirpsMessage,chirpsCity] );
}
// Update - put
export function edit(chirpsMessage: string, updateChirpID: number){
    return modifyQuery(`update chirps set message = ?  where id=?;`, [chirpsMessage,updateChirpID] );
}

//  Delete - 
export function deleteOne(id: number){
    return modifyQuery(`delete from chirps where id=?;`, [id]);
}