import axios from 'axios';
import { API } from '../../services/api';
import {
    GET_POPULAR,
    GET_RATED,
    GET_RATEDPOSTER,
    GET_SEARCH_ANSWER,
    HIDELOADING,
    SHOWLOADING,
    FILTERBYRATE,
} from '../types';

//! Loader action
export function showLoader() {
    return {
        type: SHOWLOADING,
    };
}
export function hideLoader() {
    return {
        type: HIDELOADING,
    };
}
//! GET request
export function getPopularMovies(currPage) {
    return async (dispatch) => {
        try {
            dispatch(showLoader());
            await axios
                .get(
                    `https://api.themoviedb.org/3/movie/popular?api_key=2bbb5d3e3e46103441594cbbedb59e3c&language=en-US&page=${currPage}`
                )
                .then((data) =>
                    dispatch({
                        type: GET_POPULAR,
                        payload: data.data.results,
                    })
                );
            dispatch(hideLoader());
        } catch (error) {
            console.log(error);
        }
    };
}
export function getRatedPoster() {
    return async (dispatch) => {
        try {
            dispatch(showLoader());

            await axios.get(API.mainPage.topRated).then((data) =>
                dispatch({
                    type: GET_RATEDPOSTER,
                    payload: data.data.results.slice(0, 2),
                })
            );
            dispatch(hideLoader());
        } catch (error) {
            console.log(error);
        }
    };
}
export function getRated(page) {
    return async (dispatch) => {
        try {
            dispatch(showLoader());

            await axios
                .get(
                    `https://api.themoviedb.org/3/movie/top_rated?api_key=2bbb5d3e3e46103441594cbbedb59e3c&language=en-US&page=${page}`
                )
                .then((data) =>
                    dispatch({
                        type: GET_RATED,
                        payload: data.data.results,
                    })
                );
            dispatch(hideLoader());
        } catch (error) {
            console.log(error);
        }
    };
}
export function searchResults(info) {
    return async (dispatch) => {
        try {
            dispatch(showLoader());

            await axios
                .get(
                    `https://api.themoviedb.org/3/search/movie?api_key=2bbb5d3e3e46103441594cbbedb59e3c&language=en-US&query=${info}&page=1&include_adult=false`
                )
                .then((data) =>
                    dispatch({
                        type: GET_SEARCH_ANSWER,
                        payload: data.data.results,
                    })
                );
            dispatch(hideLoader());
        } catch (error) {
            console.log(error);
        }
    };
}
