export interface IChirp {
    id: number,
    user_id: string,
    message: string,
    city: string,
    created_at: string
}

export interface IUser {
    id: number,
    handle: string,
    email: string,
    created_at: string
}

export interface IMention {
    chirp_id: number,
    user_id: number
}