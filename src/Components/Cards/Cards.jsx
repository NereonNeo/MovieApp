import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './mainCards.css';
import { Link } from 'react-router-dom';
import { API } from '../../services/api';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Cards = ({ content }) => {
  console.log(content.poster_path);
  return (
    <div className="card">
      <Link to={`/more/${content.id}`}>
        <div className="card_img">
          <LazyLoadImage
            alt={content.title}
            height="100%"
            effect="blur"
            src={
              content.poster_path == null
                ? 'https://bitsofco.de/content/images/2018/12/broken-1.png'
                : API.mainPage.photoPoster + content.poster_path
            } // use normal <img> attributes as props
            width="100%"
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
