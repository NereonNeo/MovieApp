import { useSelector } from 'react-redux';
import './main.css';
import MainContents from './MainContents';

const MainContent = () => {
    const state = useSelector((state) => state.app.topRatedPoster);

    return (
        <div>
            <div className="mainWrapp">
                {state.map((datas) => {
                    return <MainContents content={datas} key={datas.id} />;
                })}
            </div>
        </div>
    );
};

export default MainContent;
