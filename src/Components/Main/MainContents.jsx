import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../services/api';
const MainContents = ({ content }) => {
    return (
        <div className="content">
            <div className="firstContent">
                <Link to={`/more/${content.id}`}>
                    <div className="firstContent_filterColor"></div>
                    <div className="firstContent_img">
                        <img
                            src={API.mainPage.photoPoster + content.poster_path}
                            alt={content.title}
                        />
                    </div>
                    <div className="firstContent_type">
                        <p>{content.vote_average}</p>
                    </div>
                    <div className="firstContent_title">
                        <p>{content.original_title}</p>
                    </div>
                    <div className="firstContent_overwiew">
                        <p>{content.overview}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MainContents;
