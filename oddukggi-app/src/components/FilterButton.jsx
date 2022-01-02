import React from 'react';

function FilterButton(props) {
    return (
    <button class="filter-btn" type="button" id={props.idname}>
        {props.text}
    </button>
    )
}

export default FilterButton;