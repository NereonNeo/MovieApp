import React from 'react';

import './mainCards.css';
import { Link } from 'react-router-dom';
import { API } from '../../services/api';
const Cards = ({ content }) => {
    return (
        <div className="card">
            <Link to={`/more/${content.id}`}>
                <div className="card_img">
                    <img
                        src={API.mainPage.photoPoster + content.poster_path}
                        alt={content.title}
                        loading="lazy"
                    />
                </div>
                <div className="card_type">
                    <p>{content.vote_average}</p>
                </div>
                <div className="card_contain">
                    <div className="card_title">
                        <p>{content.original_title}</p>
                    </div>
                    <div className="card_subtitle">
                        <p>{content.overview}</p>
                    </div>
                    <div className="card_footer">
                        <div className="card_likecounter">
                            <i className="far fa-heart"></i>
                            <div className="card_rates">
                                <p>Vote Count: {content.vote_count}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Cards;
