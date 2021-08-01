import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './pagination.css';
const PaginationComponent = ({ dispatchFunc }) => {
    const [state, setState] = useState(1);
    const totalPages = [1, 2, 3, 4, 5];
    const dispatch = useDispatch();
    function handleChange(e) {
        dispatch(dispatchFunc(e));
        setState(e);
    }
    return (
        <div className="pagination-wrapp">
            <nav>
                <ul className="pagination">
                    {totalPages.map((element) => {
                        return (
                            <li
                                className={
                                    state === element
                                        ? 'pagination-item pg-active'
                                        : 'pagination-item'
                                }
                                key={element}
                                onClick={() => handleChange(element)}
                            >
                                <a>{element}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default PaginationComponent;
