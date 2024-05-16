import React, { useState } from 'react';


function SelectAllCheckboxes() {
    const [selected, setSelected] = useState([]);

    const checkboxList = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Watermelon"];

    function handleSelect(name, isChecked) {
        if (isChecked) {
            setSelected(prev => [...prev, name]);
        } else {
            setSelected(prev => prev.filter(item => item !== name));
        }
    }

    function handleChange(event) {
        const { name, checked } = event.target;
        handleSelect(name, checked);
    }

    function handleSelectAll(event) {
        if (event.target.checked) {
            setSelected(checkboxList);
        } else {
            setSelected([]);
        }
    }

    return (
        <div className="app-container">
            <h2>Checkbox List</h2>
            <div className='checkbox-container'>
                <input type="checkbox" onChange={handleSelectAll} name="selectAll" id="selectAll" checked={selected.length === checkboxList.length} />
                <label htmlFor="selectAll">Select All</label>
                
            </div>
          
            <div className="checkbox-list">
                {checkboxList.map((item, index) => (
                    <div className="checkbox-container" key={index}>
                        <input type='checkbox' onChange={handleChange} name={item} id={item} checked={selected.includes(item)} />
                        <label htmlFor={item}>{item}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SelectAllCheckboxes;
