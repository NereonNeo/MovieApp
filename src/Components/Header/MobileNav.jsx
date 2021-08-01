import Search from './Search';

const MobileNav = ({ state }) => {
    return (
        <div className={state ? 'adaptiveMenu' : 'MobileadaptiveMenu'}>
            <div className="adaptiveMenuList">
                <div className="munuList News">
                    <a href="/">Top popular</a>
                </div>
                <div className="munuList Tech">
                    <a href="/rated">Top Rated</a>
                </div>
                <div className="munuLists LoginAndMode">
                    <Search />
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
