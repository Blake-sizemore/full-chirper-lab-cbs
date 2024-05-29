import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../services/fetchData';
import type { IChirp } from '../types';
import Dropdown from 'react-bootstrap/Dropdown';

interface AddProps { }

const EditChirps = (props: AddProps) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [chirp, setChirp] = useState<IChirp | null>(null)
    const [message, updateMessage] = useState<string>('');
    const [city, updateCity] = useState<string>('');
    
    const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        fetchData(`/api/chirps/:${chirp?.id}`, 'PUT', { message: message, city: city, id:chirp?.id  }).then(data => navigate(`/chirps/${chirp?.id}`));
    }
    
    
    useEffect(() => {
        fetchData(`/api/chirps/${id}`)
            .then(res => setChirp(res[0])
            )
            .catch(e => console.error(e, 'contact maker,data not set'));
    }, [id]);

    return (
        <main className="container mt-5">
            <form className="shadow bg-secondary-subtle rounded p-5">
                <label className="">message</label>
                <input className="form-control bg-light" type="text" name="message" id="message" value={message} placeholder={chirp?.message} onChange={e => updateMessage(e.target.value)} />
                <label className="">city</label>
                <input className="form-control bg-light" type="text" name="city" id="city" value={city} placeholder={chirp?.city} onChange={e => updateCity(e.target.value)} />
                <label className="">mention a user</label>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item >@User 1</Dropdown.Item>
                        <Dropdown.Item >@User 2</Dropdown.Item>
                        <Dropdown.Item >No Mention</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <button onClick={handleUpdate} className="btn btn-outline-warning mt-2">Update Chirp</button>
            </form>
        </main>
    )
}
export default EditChirps;