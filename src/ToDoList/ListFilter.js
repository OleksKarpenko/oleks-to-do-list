import React, { useState } from 'react';

import classes from './ListFilter.module.css';

const ListFilter = (props) => {
    const [inputVal, setInputVal] = useState('');

    const getTitle = (event) => { 
        setInputVal(event.target.value);
    };

    const submitSearch = (e) => {
        e.preventDefault();
        const filterData = inputVal;

        props.getFilter(filterData);
        setInputVal('');
    }

    return (
            <div className={classes['expenses-filter']}>
            <div className={classes['expenses-filter__control']}>
                <form onSubmit={submitSearch}>
                    <div className="form__control">
                        <label>Filter items:</label>
                        <input
                            type='text'
                            value={inputVal}
                            onChange={getTitle} 
                        />

                        <button type="submit">Search / Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ListFilter;