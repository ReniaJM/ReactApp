import React from "react";
import { RadioGroup, Radio } from "react-radio-group";
import PropTypes from 'prop-types';

const Allbuttons = props => {
    return (
        <RadioGroup
            name="manufacture"
            onClick={event => props.onChange(event.target.value)}
        >
            <label className="radioLabel">
                <Radio
                    value=""
                    readOnly
                    checked={props.manufacture === "" ? true : false}
                />
                All
            </label>
            <label className="radioLabel">
                <Radio value="apple" />
                Apple
            </label>
            <label className="radioLabel">
                <Radio value="dell" />
                Dell
            </label>
        </RadioGroup>
    );
};

Allbuttons.propTypes = {
    manufacture: PropTypes.string,

};

export default Allbuttons;
