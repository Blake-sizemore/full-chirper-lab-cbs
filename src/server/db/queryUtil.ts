import pool from './connections_db';
import { ResultSetHeader } from 'mysql2';

export async function selectQuery<T>(queryString: string, params?: any): Promise<Partial<T>[]> {
    const [results] = await pool.execute(queryString, params);
    return results as T[];
};

export async function modifyQuery(queryString: any, params?: any): Promise<ResultSetHeader> {
    const [results] = await pool.query(queryString, params);
    return results as ResultSetHeader;
};