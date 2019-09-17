import React, { Component } from 'react';

class DataRow extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            userStatus: true,
            editMode: this.props.editUserMode
        })
    }
    


    showRole = (role) => {
        if (role === "1") {
            return (<td>Admin</td>);
        }
        else return role === "2" ? (<td>Moderator</td>) : (<td>Employee</td>);
    }

    getUser = (status) => {
        if (status) {

            this.setState({
                ...this.state.userStatus,
                editMode: false
            });
            this.props.getUserInfoToEdit();
        } else {
            this.setState({
                ...this.state.userStatus,
                editMode: false
            });
            this.props.getUserInfoToDelete();
        }
    }

    isEditMode = () => {
        return this.state.editMode
    }

    render() {
        ////console.log (this.props.valueProps.name);
        //console.log("Component DataRow");
        console.log(this.props.valueProps.id);
        const isEnabled = this.isEditMode();
        console.log(isEnabled);

        return (
            <tr>
                <td>{this.props.keyProps + 1}</td>
                <td>{this.props.valueProps.name}</td>
                <td>{this.props.valueProps.phone}</td>
                {this.showRole(this.props.valueProps.role)}
                <td>
                    <div className="btn-group">
                        {/* <div className="btn btn-warning edit" onClick={() =>  this.props.getUserInfo()}> */}
                        <button
                            disabled={!isEnabled}
                            className="btn btn-warning edit"
                            onClick={() => this.getUser(this.state.userStatus)}
                        >
                            Edit
                            </button>
                        <button
                            disabled={!isEnabled}
                            className="btn btn-danger delete"
                            onClick={() => this.getUser(!this.state.userStatus)}
                        >
                            Delete
                            </button>
                    </div>
                </td>
            </tr>

        );
    }
}

export default DataRow;