import { useSelector } from 'react-redux';
import { getPopularMovies } from '../../Redux/actions/appAction';
import PaginationComponent from '../Pagination/Pagination';
import Cards from './Cards';

const MainCards = () => {
    const state = useSelector((state) => state.app.popularMovie);

    return (
        <div className="MainCardsContainer">
            {state.map((element) => {
                return <Cards content={element} key={element.id} />;
            })}
            <PaginationComponent dispatchFunc={getPopularMovies} />
        </div>
    );
};

export default MainCards;
