import './loader.css';
const Loader = () => {
    return (
        <div id="cube-loader">
            <div className="caption">
                <div className="cube-loader">
                    <div className="cube loader-1"></div>
                    <div className="cube loader-2"></div>
                    <div className="cube loader-4"></div>
                    <div className="cube loader-3"></div>
                </div>
                <h2>Wait Please!</h2>
            </div>
        </div>
    );
};

export default Loader;
