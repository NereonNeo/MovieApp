import { useSelector } from 'react-redux';
import Cards from '../../Components/Cards/Cards';
import PaginationComponent from '../../Components/Pagination/Pagination';
import { getRated } from '../../Redux/actions/appAction';

const Rated = () => {
    const state = useSelector((state) => state.app.topRated);

    return (
        <div className="MainCardsContainer">
            {state.map((element) => {
                return <Cards content={element} key={element.id} />;
            })}
            <PaginationComponent dispatchFunc={getRated} />
        </div>
    );
};

export default Rated;
