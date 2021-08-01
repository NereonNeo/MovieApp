import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainCards from './Components/Cards/MainCards';
import Footer from './Components/Footer/Index';
import Header from './Components/Header/Header';
import Loader from './Components/Loader/Loader';

import MainContent from './Components/Main/MainContent';
import Films from './Pages/Movie/Films';
import SearchPage from './Pages/Search/SearchPage';
import Rated from './Pages/TopRated/Rated';
import {
    getPopularMovies,
    getRated,
    getRatedPoster,
} from './Redux/actions/appAction';
function App() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.app.isLoading);
    useEffect(() => {
        dispatch(getPopularMovies());
        dispatch(getRatedPoster());
        dispatch(getRated());
    }, []);
    return (
        <div className="App">
            {state ? <Loader /> : false}
            <Router>
                <div className="container">
                    <Header />
                    <Switch>
                        <div className="content">
                            <Route exact path="/" component={MainContent} />
                            <div className="cards_wrap_title">
                                <p>Movie - новинки из мира кино</p>
                            </div>
                            <div className="container_content">
                                <Route exact path="/" component={MainCards} />
                                <Route
                                    exact
                                    path="/more/:id"
                                    component={Films}
                                />
                                <Route
                                    exact
                                    path="/search/:id"
                                    component={SearchPage}
                                />

                                <Route exact path="/rated/" component={Rated} />
                            </div>
                        </div>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;
