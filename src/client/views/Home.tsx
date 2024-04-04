import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/fetchData';
import type { IChirp } from '../types';
import { Link } from 'react-router-dom';


interface HomeProps { };

const Home = (props: HomeProps) => {
    
    const [chirpset, setChirp] = useState<IChirp[]>([]);

	useEffect(() => {
		fetchData(`/api/chirps`)
			.then(chirps => setChirp(chirps))
			.catch(e => console.error('contact maker,chirps not set'));
	}, []);

    return (
        <div className='row row-cols-1'>
            <article>Welcome to my fullstack chirpr page</article>
            <article id='messageBoard' className='row bg-white justify-content-center'>
                {chirpset.map(chirp => (
                            <div className="col-8 border border-primary rounded-3 m-1" id={`${chirp.id}`} key={chirp.id}>
                                <div>posted by: @{chirp.user_id}</div>
                                <div>said: {chirp.message}</div>
                                <div>from: {chirp.city}</div>
                                <div>at: {chirp.created_at}</div>
                                <Link className="btn btn-warning" to={`/chirps/${chirp.id}`}> Details </Link>
                            </div>
                        ))}
            </article>
        </div>
    )
};

export default Home