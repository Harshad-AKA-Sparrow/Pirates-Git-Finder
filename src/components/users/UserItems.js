import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link
            to={`/single-user/${login}`}
            className='btn btn-dark btn-sm my-1'
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItems.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItems;
