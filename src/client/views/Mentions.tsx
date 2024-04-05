import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/fetchData';
import type { IMention } from '../types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

interface MentionsProps { };

const Mentions = (props: MentionsProps) => {

    const [mentions, setMentions] = useState<IMention[]>([]);

    useEffect(() => {
        fetchData(`/api/mentions`)
            .then(mention => setMentions(mention))
            .catch(e => console.error('contact maker,chirps not set'));
    }, []);


    return (
        <div className='row row-cols-1'>
            <article className='row justify-content-center'>Mention page</article>
            <article id='mentionBoard' className='row justify-content-center'>
                {mentions.map(mention => (
                    <Card className='shadow col-8 rounded-3 m-1 bg-white'>
                    <Card.Body  id={`${mention.chirp_id}`} key={mention.chirp_id}>
                        <Card.Title>Mention</Card.Title>
                        <Card.Text>
                            <div>Chirp #: {mention.chirp_id}</div>
                            <div>Mentioned: user {mention.user_id}</div>
                            <Link className="btn btn-warning" to={`/chirps/${mention.chirp_id}`}> Go to mentioned chirp </Link>
                        </Card.Text>
                    </Card.Body>
                    </Card>

                ))}
            </article>
        </div>
    )
};

export default Mentions;
