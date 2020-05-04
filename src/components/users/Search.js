import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };
  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showBtn: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired,
  };
  submitSearch = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.showAlert('Please Enter Something', 'light');
    } else {
      this.props.searchUser(this.state.text);
      this.setState({
        text: '',
      });
    }
  };
  inputHandler = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { showBtn, clearUser } = this.props;
    return (
      <div>
        <form onSubmit={this.submitSearch} className='form'>
          <input
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.inputHandler}
            placeholder='Search User...'
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showBtn && (
          <button className='btn btn-light btn-block' onClick={clearUser}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
