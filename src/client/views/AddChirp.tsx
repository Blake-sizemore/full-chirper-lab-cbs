import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../services/fetchData';
// import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';

interface AddProps { }

const AddChirp = (props: AddProps) => {
    const navigate = useNavigate();
    const [message, setMessage] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        fetchData('/api/chirps', 'POST', { message: message, city: city }).then(data => navigate(`/chirps/${data.id}`));
    }

    return (
        <main className="container mt-5">
            <form className="shadow bg-secondary-subtle rounded p-5">
                <label className="">message</label>
                <input className="form-control bg-light" type="text" name="message" id="message" value={message} onChange={e => setMessage(e.target.value)} />
                <label className="">city</label>
                <input className="form-control bg-light" type="text" name="city" id="city" value={city} onChange={e => setCity(e.target.value)} />
                <label className="">mention a user</label>
                
                <button onClick={handleSubmit} className="btn btn-outline-warning mt-2">Add Chirp</button>
            </form>
        </main>
    )
}
export default AddChirp;