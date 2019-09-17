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

class AddNew extends Component {
    constructor(props) {
        super(props);
        this.isChange = this.isChange.bind(this);
        this.canBeSubmitted = this.canBeSubmitted.bind(this);
        this.showForm = this.showForm.bind(this);
        this.creatNewuser = this.creatNewuser.bind(this);
    }

    state = {
        id: '',
        name: this.props.name,
        phone: this.props.phone,
        role: this.props.role
    }

    creatNewuser(event) {
        event.preventDefault();
        this.props.summitForm(this.state);
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
        if (!this.props.addStatus) {
            const isEnabled = this.canBeSubmitted();
            return (
                <div className="card border-primary mb-3 mt-2">
                    <div className="card-header">Add new user</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <input
                                    onChange={this.isChange}
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    aria-describedby="helpId"
                                    placeholder="Name"
                                    data-validation-required-message="Please enter your name."
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    onChange={this.isChange}
                                    name="phone"
                                    type="text"
                                    className="form-control"
                                    aria-describedby="helpId"
                                    placeholder="Phone"
                                    data-validation-required-message="Please enter your phone."
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    className="form-control"
                                    name="role"
                                    onChange={this.isChange}
                                >
                                    <option value>Role</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Employee</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="reset"
                                    aria-hidden="true"
                                    className="btn btn-info btn-xl btn-block"
                                />
                            </div>
                        </form>
                        <div className="form-group">
                            <button
                                type="submit"
                                aria-hidden="true"
                                disabled={!isEnabled}
                                //onSubmit={(event) => this.creatNewuser(event)}
                                onClick={() => this.props.summitForm(this.state)}
                                className="btn btn-primary btn-xl btn-block"
                            >
                                Create new user
                                </button>
                        </div>
                    </div>
                </div>
            )
        }
    }


    render() {
        //console.log("Component AddNew");

        return (
            <div>                
                {this.showForm()}
            </div>
        );
    }
}

AddNew.propTypes = propTypes;
AddNew.defaultProps = defaultProps;

export default AddNew;