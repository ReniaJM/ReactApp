import React from "react";
import PropTypes from 'prop-types';

const SerchInput = props => {
    return (
        <div>
            <input
                id="name"
                type="text"
                placeholder="search..."
                value={props.name}
                onChange={event => props.onChange(event.target.value)}
            />
        </div>
    );
};
SerchInput.propTypes = {
    name: PropTypes.string,

};

export default SerchInput;
