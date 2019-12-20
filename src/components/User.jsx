import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class User extends Component {
    render() {
        // Destructing
        const {name,department,salary} = this.props;
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="far fa-trash-alt">{name}</h4>
                        <i className="far fa-trash-alt" style = {{cursor : "pointer"}}></i>

                    </div>
                    <div className="card-text">
                        <p className="card-text">Maas : {salary}</p>
                        <p className="card-text">Department : {department}</p>
                    </div>
                </div>
            </div>
        )
    }
}
User.defaultProps = {
    name : "Bilgi yok",
    salary : "Bilgi yok"
}
User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired
}

