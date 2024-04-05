import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/fetchData';
import type { IChirp } from '../types';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


interface DetailProps { };

const ChirpsDetails = (props: DetailProps) => {
    const { id } = useParams();
    const [chirp, setChirp] = useState<IChirp | null>(null)


    useEffect(() => {
        fetchData(`/api/chirps/${id}`)
            .then(res => setChirp(res[0])
            )
            .catch(e => console.error(e, 'contact maker,data not set'));
    }, [id]);

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
                        <Link to="/" className='btn btn-warning'>Back to home page</Link>
                    </Card.Text>
                </Card.Body>
            </Card >
        </div>
    )
};

export default ChirpsDetails;

// import React, { useState, useEffect } from 'react';
// import { fetchData } from '../services/fetchData';
// import type { IChirp } from '../types';
// import { useParams } from 'react-router-dom';

// interface DetailProps {};

// const ChirpsDetails = (props: DetailProps) => {
//     const { id } = useParams<{ id: string }>(); // Ensure you're destructuring `id` correctly
//     const [chirp, setChirp] = useState<IChirp | null>(null);
//     const [error, setError] = useState<string | null>(null); // State to handle any errors

//     useEffect(() => {
//         // Guard clause to ensure id exists
//         if (!id) {
//             setError('No ID provided.');
//             return;
//         }

//         fetchData(`/api/chirps/${id}`)
//             .then(res => setChirp(res))
//             .catch(e => {
//                 console.error(e); // Good to keep the log for debugging
//                 setError('Failed to fetch data. Please contact support.'); // More user-friendly error message
//             });
//     }, [id]); // Dependency array to ensure effect runs only when `id` changes

//     if (error) {
//         return <div className="alert alert-danger" role="alert">{error}</div>;
//     }

//     return (
//         <div className="col-8 border border-primary rounded-3 m-1" id={id}>
//             {chirp ? <h1>{chirp?.user_id}</h1> : <p>Loading...</p>}
//             {chirp ? <h1>{chirp?.city}</h1> : <p>Loading...</p>}
//         </div>
//     );
// };

// export default ChirpsDetails;