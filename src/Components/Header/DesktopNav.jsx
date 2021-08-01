import { Link } from 'react-router-dom';
const DesktopNav = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/">Top popular</Link>
                </li>
                <li>
                    <Link to="/rated">Top Rated</Link>
                </li>
            </ul>
        </nav>
    );
};

export default DesktopNav;
