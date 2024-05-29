import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/fetchData';
import type { IChirp } from '../types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


interface DetailProps { };

const ChirpsDelete = (props: DetailProps) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [chirp, setChirp] = useState<IChirp | null>(null);


    useEffect(() => {
        fetchData(`/api/chirps/${id}`)
            .then(res => setChirp(res[0])
            )
            .catch(e => console.error(e, 'contact maker,data not set'));
    }, [id]);

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        fetchData(`/api/chirps`, 'DELETE').then(data => navigate(`/`));
    } 

    return (
        <div className='row row-cols-1 justify-content-center'>
            <div className='row justify-content-center'>Chirpr Details</div>
            <Card className='shadow col-8 rounded-3 m-1 bg-white'>
                <Card.Body id={`${id}`} key={id} >
                    <Card.Title>Chirp #{id}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Post by: User #{chirp?.user_id}</Card.Subtitle>
                    <Card.Text>
                        {chirp ? <p>User said: {chirp?.message}</p> : <p>Loading message ...</p>}
                        {chirp ? <p>From: {chirp?.city}</p> : <p>Loading City ...</p>}
                        {chirp ? <p>At: {chirp?.created_at}</p> : <p>Loading time made ...</p>}
                        <Button onClick={handleDelete} className='btn btn-warning'>Click Here to delete this chirp</Button>
                    </Card.Text>
                </Card.Body>
            </Card >
        </div>
    )
};

export default ChirpsDelete;