import React from 'react';
import PropTypes from 'prop-types';
import './Picker.css'

const Picker = props => {
    let input;
    const { onSubmit } = props;
    return (
        <div className="header">
            <nav class="navbar">
                <h1>Github Stalker</h1>
                
                <div className="form-group ml-3">
                    <label className="ml-n3">Search for a Github username</label>
                    <form
                        className="row"
                        onSubmit={e => {
                            e.preventDefault();
                            if (input.value !== '') {
                                onSubmit(input.value);
                            }
                        }}
                        >
                        <input
                            className="form-control col-8"
                            type="text"
                            placeholder="Username"
                            ref={node => {
                                input = node;
                            }}
                            />
                        <button className="btn btn-outline-light ml-1" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

Picker.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Picker;
