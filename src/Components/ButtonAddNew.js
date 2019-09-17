import React, { Component } from 'react';


class ButtonAddNew extends Component {
    showButton = () => {
        if (this.props.currentStatus) {
            return <div onClick={this.props.changeAddNewStatus} className="btn btn-block btn-outline-info">Click to add new user</div>
        }
        else {
            return <div onClick={this.props.changeAddNewStatus} className="btn btn-block btn-outline-secondary">Close form</div>
        }
    }
    render() {
        //console.log("Component ButtonAddNew");
        
        return (
            <div className="form-group">
                {this.showButton()}
            </div>
        );
    }
}

export default ButtonAddNew;