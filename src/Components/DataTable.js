import React, { Component } from 'react';
import DataRow from './DataRow';
const uuidv4 = require('uuid/v4');
class DataTable extends Component {

    shouldComponentUpdate(nextProps) {
        if (this.props.data === null) {
            return true;
        }
        if (this.props.data === nextProps.data) {
            return false;
        }
        return true;
    }


    render() {
        //console.log("Component DataTable");
        //console.log(uuidv4());

        return (
            <div className="col-9">
                <table className="table table-striped table-hover table-inverse">
                    <thead className="thead-inverse">
                        <tr>
                            <th>No.</th>
                            <th>Username</th>
                            <th>Phone</th>
                            <th><i className="fas fa-critical-role    " />Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.map((value, key) =>
                                <DataRow
                                    getUserInfoToEdit={(userInfo) => this.props.editFunc(value)}
                                    getUserInfoToDelete={(userInfo) => this.props.deleteFunc(value)}
                                    editUserMode={this.props.editUserMode}
                                    valueProps={value}
                                    key={uuidv4()}
                                    keyProps={key}
                                />)}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default DataTable;