import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Spinner } from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExp from './ProfileExp';
import ProfileEdu from './ProfileEdu';
import ProfileRepos from './ProfileRepos';

const Profile = ({
  match,
  getProfileById,
  profile: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);
  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/profiles' className='btn btn-light'>
            Back to Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}
          <div className='profile-grid my-1'>
            <ProfileTop profile={profile} />
          </div>
          <div className='profile-about bg-light p-2'>
            <ProfileAbout profile={profile} />
          </div>
          {profile.experience.length > 0 && (
            <div className='profile-exp bg-white p-2'>
              <ProfileExp profile={profile} />
            </div>
          )}
          {profile.education.length > 0 && (
            <div className='profile-edu bg-white p-2'>
              <ProfileEdu profile={profile} />
            </div>
          )}
          {profile.githubusername && (
            <ProfileRepos username={profile.githubusername} />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
