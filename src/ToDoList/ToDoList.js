import React from 'react';

import ToDoItem from './ToDoItem';

const ToDo = (props) => {

    return (
        <div>
            {props.items.length === 0 && <h2 className='expenses-list__fallback'>Found no expenses</h2>}

            {props.items.map((item) => ( 
                <ToDoItem
                    key={item.id}
                    itemId={item.id}
                    title={item.title}
                    remove={props.remove}
                />
            ))}
        </div>
    )
}

export default ToDo;