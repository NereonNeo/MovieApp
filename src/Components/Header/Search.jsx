import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';

const Search = () => {
    const router = useHistory();
    const [input, setInput] = useState('');
    const changeHandler = () => {
        if (input !== '') router.push(`/search/${input}`);
        setInput('');
    };
    return (
        <div className="loginbuttons">
            <div className="login button">
                <div>
                    <input
                        className="searchInput"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <IconButton onClick={changeHandler} aria-label="delete">
                        <SearchIcon color="primary" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Search;
