import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../Components/Cards/Cards';
import { searchResults } from '../../Redux/actions/appAction';
import './search.css';
const SearchPage = ({ match }) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.app.searchResults);
    useEffect(() => {
        dispatch(searchResults(match.params.id));
    }, [match.params.id]);
    return (
        <div className="searchWrapp">
            <div className="MainCardsContainer">
                {state.length === 0 ? (
                    <h1 className="warning">
                        Нам не удалось ничего найти. Нет ли грамматических
                        ошибок в запросе?
                    </h1>
                ) : (
                    state.map((element) => (
                        <Cards content={element} key={element.id} />
                    ))
                )}
            </div>
        </div>
    );
};

export default SearchPage;
