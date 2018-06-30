import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  dataHandle: PropTypes.func.isRequired,
};

class Search extends Component {
  state = {
    searchText: ''
  }

  onChangeSearchText = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  onSubmitSearchHandle = (event) => {
    event.preventDefault();
    const url = `/ghichu/search/${this.state.searchText}`;
    this.props.dataHandle(url);
  }

  render() {
    return (
      <form className="Form" onSubmit={this.onSubmitSearchHandle}>
        <div className="row">
          <div className="col-12">
            <div className="input-group input-group-sm mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm ..."
                value={this.state.searchText}
                onChange={this.onChangeSearchText}
              />
              {/* <div className="input-group-append">
                <button
                  className="btn btn-danger"
                >Tìm kiếm</button>
              </div> */}
            </div>
          </div>
        </div>
      </form>
    );
  }
};


Search.propTypes = propTypes;


export default Search;
