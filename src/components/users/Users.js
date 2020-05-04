<<<<<<< HEAD
import React, { Component } from 'react';
import UserItems from './UserItems';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((users) => (
          <UserItems key={users.id} user={users} />
        ))}
      </div>
    );
  }
};
Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
let userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};
export default Users;
=======
import React, { Component } from 'react';
import UserItems from './UserItems';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((users) => (
          <UserItems key={users.id} user={users} />
        ))}
      </div>
    );
  }
};
Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
let userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};
export default Users;
>>>>>>> 9197bd888f1e31628b35f12be9539d423471ec27
