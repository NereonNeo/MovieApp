import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { priceDoll } from '../../Helpers/price';
import { API } from '../../services/api';
import './films.css';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../../Redux/actions/appAction';
const Films = ({ match }) => {
    const [state, setState] = useState([]);
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showLoader());
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=2bbb5d3e3e46103441594cbbedb59e3c`
            )
            .then((e) => {
                setState(e.data);
            });
        dispatch(hideLoader());
    }, []);
    return (
        <div className="filmsContainer">
            <div className="imgContainer">
                <img
                    src={API.mainPage.photoPoster + state.backdrop_path}
                    alt={state.title}
                />
            </div>
            <div className="textTitle">
                <h1>{state.original_title}</h1>
            </div>
            <div className="textContainer">
                <p>{state.overview}</p>
            </div>
            <div className="tagContainer">
                <div className="tag">
                    <p>Budget: {priceDoll(state.budget)}</p>
                </div>
                <div className="tag">
                    <p>Popularity: {state.popularity}</p>
                </div>
                <div className="tag">
                    <p>Release Date: {state.release_date}</p>
                </div>
                <div className="tag">
                    <p>Vote Avarge: {state.vote_average}</p>
                </div>
                <div className="tag">
                    <p>Vote Count: {state.vote_count}</p>
                </div>
                <div className="tag">
                    <p>
                        Languages:
                        {state.spoken_languages &&
                            state.spoken_languages.map((e) => ' | ' + e.name)}
                    </p>
                </div>
            </div>
            <Button
                variant="contained"
                onClick={() => history.goBack()}
                startIcon={<KeyboardBackspaceIcon />}
            >
                Back
            </Button>
        </div>
    );
};

export default Films;
