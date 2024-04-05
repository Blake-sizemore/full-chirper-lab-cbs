import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/fetchData';
import type { IChirp } from '../types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Admin = () => {
    const [chirpset, setChirp] = useState<IChirp[]>([]);

    useEffect(() => {
        fetchData(`/api/chirps`)
            .then(chirps => setChirp(chirps))
            .catch(e => console.error('contact maker,chirps not set'));
    }, []);

    return (
        <div className='row row-cols-1'>
            <article className='row justify-content-center'>Welcome to my Admin chirpr page</article>
            <article id='messageBoard' className='row justify-content-center'>
                {chirpset.map(chirp => (
                    <Card className='shadow col-8 rounded-3 m-1 bg-white'>
                        <Card.Body id={`${chirp.id}`} key={chirp.id} >
                            <Card.Title>Chirp #{chirp.id}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Post by: Chirp #{chirp.user_id}</Card.Subtitle>
                            <Card.Text>
                                <div>said: {chirp.message}</div>
                                <div>from: {chirp.city}</div>
                                <div>at: {chirp.created_at}</div>
                            </Card.Text>
                            <Card.Link className="btn btn-warning" href={`/chirps/${chirp.id}`}> Details</Card.Link>
                            <Card.Link className='btn btn-danger' >Delete</Card.Link>
                            <Card.Link className='btn btn-info' href={`/chirps/${chirp.id}`}>edit</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </article>
        </div>
    )
};

export default Admin;