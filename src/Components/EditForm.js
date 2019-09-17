import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string,
    phone: PropTypes.number,
    role: PropTypes.string,
};

const defaultProps = {
    name: '',
    phone: 0,
    role: '',
};


class EditForm extends Component {
    constructor(props) {
        super(props);
        this.isChange = this.isChange.bind(this);
        this.canBeSubmitted = this.canBeSubmitted.bind(this);
    }

    state = {
        id: this.props.info.id,
        name: this.props.info.name,
        phone: this.props.info.phone,
        role: this.props.info.role
    }


    isChange(event) {
        const name = event.target.name;
        const value =
            event.target.type === "checkbox" ? event.target.checked : event.target.value;
        this.setState({
            ...this.state.id,
            [name]: value
        });
    }

    canBeSubmitted() {
        console.log(this.state.name);
        console.log(this.state.phone);
        console.log(this.state.role);
        
        if (this.state.name != null && this.state.role != null && this.state.phone != null)
            return (
                this.state.name.length > 0
                && this.state.phone.length > 0
                && this.state.role > 0
                && this.state.role < 4
            );
        return false;
    }
    showForm() {

    }
    render() {
        const isEnabled = this.canBeSubmitted();
        return (
            <div className="col-12">
                <div className="card border-primary mb-3 mt-2 bg-warning">
                    <div className="card-header">Edit User</div>
                    <div className="card-body">
                        <div className="form-group">
                            <input
                                onChange={this.isChange}
                                name="name"
                                type="text"
                                className="form-control"
                                aria-describedby="helpId"
                                data-validation-required-message="Please enter your name."
                                placeholder="name"
                                defaultValue={this.props.info.name}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.isChange}
                                name="phone"
                                type="text"
                                className="form-control"
                                aria-describedby="helpId"
                                data-validation-required-message="Please enter your phone."
                                placeholder="phone"
                                defaultValue={this.props.info.phone}
                            />
                        </div>
                        <div className="form-group">
                            <select
                                className="form-control"
                                name="role"
                                onChange={this.isChange}
                                defaultValue={this.props.info.role}
                            >
                                <option value>Role</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Employee</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                aria-hidden="true"
                                disabled={!isEnabled}
                                onClick={() => this.props.editInfoMethod(this.state)}
                                className="btn btn-danger btn-xl btn-block"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

EditForm.propTypes = propTypes;
EditForm.defaultProps = defaultProps;

export default EditForm;