import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Repos from '../Repos/Repos';

export class SingleUser extends Component {
  componentDidMount() {
    this.props.getSingleUser(this.props.match.params.login);
    this.props.getSingleUserRepos(this.props.match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool,
    singleUser: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getSingleUser: PropTypes.func.isRequired,
    getSingleUserRepos: PropTypes.func.isRequired,
  };
  render() {
    const {
      name,
      avatar_url,
      company,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.singleUser;
    const { loading, repos } = this.props;
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              alt=''
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong>
                    {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong>
                    {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Blog: </strong>
                    {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-light'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gist:{public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default SingleUser;
