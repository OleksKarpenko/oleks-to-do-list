import React, { useState } from "react";

import ToDo from "./ToDoList/ToDoList";
import AddForm from "./ToDoList/AddForm";
import ListFilter from "./ToDoList/ListFilter"

import './ToDoList/style.css'

const baseItemsList = [
    {
        id: 'e1',
        title: 'Mushrooms'
    },
    {
        id: 'e2',
        title: 'Garnet'
    },
    {
        id: 'e3',
        title: 'Apples'
    },
    {
        id: 'e4',
        title: 'Sause'
    },
    {
        id: 'e5',
        title: 'Potato'
    },
];

const NewApp = () => {
    let [itemsList, setItemsList] = useState(baseItemsList);
    const [filterItemsList, setFilterItemsList] = useState(itemsList);

    // localStorage.setItem('currentList', JSON.stringify(filterItemsList));
    
    const onSubmitForm = (newFormItem) => {
        setItemsList(previtemsList => {
            return [newFormItem, ...previtemsList]
        });
        setFilterItemsList(previtemsList => {
            return [newFormItem, ...previtemsList]
        });

        
        // localStorage.setItem('currentList', JSON.stringify(filterItemsList));
    }

    const onFilterChange = (filterValue) => {
        if (filterValue.length !== 0) {
            setFilterItemsList(itemsList.filter(item => item.title.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())))
        } else {
            return setFilterItemsList(itemsList);
        }

        // localStorage.setItem('currentList', JSON.stringify(filterItemsList));
    }

    const removeProduct = (currentId) => {
        setItemsList(itemsList.filter(item => {
            return item.id !== currentId
        }));
        setFilterItemsList(itemsList.filter(item => {
            return item.id !== currentId
        }));

        // localStorage.setItem('currentList', JSON.stringify(filterItemsList));
    }


    // const mainList = JSON.parse(localStorage.getItem('currentList'));

    return (
        <div className='wrapper'>
            <h2>To Do List:</h2>
            <AddForm newItem={onSubmitForm} />
            <ListFilter getFilter={onFilterChange} />
            <ToDo items={filterItemsList} remove={removeProduct} />
        </div>
    );
}

export default NewApp;
