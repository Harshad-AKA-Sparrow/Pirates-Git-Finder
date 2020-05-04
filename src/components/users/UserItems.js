import React from 'react';
import PropTypes from 'prop-types';

const UserItems = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div>
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '100px' }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    </div>
  );
};

UserItems.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItems;
