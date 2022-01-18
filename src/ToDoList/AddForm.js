import React, { useState } from "react";

const AddForm = (props) => {
    const [inputVal, setInputVal] = useState('');

    const getTitle = (event) => {
        setInputVal(event.target.value);
    };

    const submitForm = (event) => {
        event.preventDefault();

        const formData = {
            title: inputVal,
            id: Math.random().toString()
        }

        if (formData.title) {
            props.newItem(formData);
            setInputVal('');
        }

    }

    return (
        <div className="form_wrapper">
            <form onSubmit={submitForm}>
                <div className="form_box">
                    <div className="form__control">
                        <label>Enter item:</label>
                        <input
                            type='text'
                            value={inputVal}
                            onChange={getTitle}
                        />
                        <button type="submit">Add item</button>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default AddForm;