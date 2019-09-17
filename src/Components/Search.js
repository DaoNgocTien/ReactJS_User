import React, { Component } from 'react';

class Search extends Component {
    isChange = (e) => {
        this.props.searchByNameProps(e.target.value);
    }
    render() {
        //console.log("Component Search");
        
        return (
            <div>
                <div className="col-12">
                    <div className="form-group">
                        <div className="btn-group">
                            <input onChange={(e) => this.isChange(e)} ref={e => this.input = e } type="text" className="form-control " aria-describedby="helpId" placeholder="Keyword" style={{ width: '600px' }} />
                            <div onClick={(searchName) => this.props.searchByNameProps(this.input.value)} className="btn btn-info col-3 ml-3">Search</div>
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Search;