import {
    GET_POPULAR,
    GET_RATED,
    GET_RATEDPOSTER,
    GET_SEARCH_ANSWER,
    HIDELOADING,
    SHOWLOADING,
} from '../types';
const initialState = {
    popularMovie: [],
    topRatedPoster: [],
    searchResults: [],
    topRated: [],
    isLoading: false,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POPULAR:
            return {
                ...state,
                popularMovie: (state.popularMovie = action.payload),
            };
        case GET_RATEDPOSTER:
            return {
                ...state,
                topRatedPoster: state.topRatedPoster.concat(action.payload),
            };
        case GET_RATED:
            return {
                ...state,
                topRated: (state.topRated = action.payload),
            };
        case GET_SEARCH_ANSWER:
            return {
                ...state,
                searchResults: (state.searchResults = action.payload),
            };
        case SHOWLOADING:
            return {
                ...state,
                isLoading: true,
            };
        case HIDELOADING:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
};
