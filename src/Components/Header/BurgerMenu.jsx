const BurgerMenu = ({ change }) => {
    return (
        <div className="Bmenu" onClick={change}>
            <div className="1 line"></div>
            <div className="2 line"></div>
            <div className="3 line"></div>
        </div>
    );
};

export default BurgerMenu;
