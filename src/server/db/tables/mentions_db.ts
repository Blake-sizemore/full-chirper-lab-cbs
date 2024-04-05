import { selectQuery, modifyQuery } from "../queryUtil";
import type { RowDataPacket } from "mysql2";

export interface IMentionsRow extends RowDataPacket {
    chirp_id: number,
    user_id: number
}

// Create Read Update Delete - CRUD

// Read -  get
export function getOne(id: number){
    return selectQuery<IMentionsRow>(`select * from mentions where user_id=?;`, [id]);
}

export function getAll(){
    return selectQuery<IMentionsRow>(`select * from mentions;`);
}

// // Update - post
// export function addChirp(chirpsUser: number, chirpsMessage: string,chirpsCity: string){
//     return modifyQuery(`insert into chirps (user_id,message,city) value (?,?,?);`,[chirpsUser,chirpsMessage,chirpsCity] );
// }
// // Update - put
// export function edit(chirpsMessage: string, updateChirpID: number){
//     return modifyQuery(`update chirps set message = ?  where id=?;`, [chirpsMessage,updateChirpID] );
// }

// //  Delete - 
// export function deleteOne(id: number){
//     return modifyQuery(`delete from chirps where id=?;`, [id]);
// }