import React, { Fragment } from 'react';
import Moment from 'react-moment';

const ProfileExp = ({ profile: { experience } }) => {
  return (
    <Fragment>
      {experience &&
        experience.map(exp => (
          <div key={exp._id}>
            <h2 className='text-primary'>Experience</h2>
            <div>
              <h3 className='text-dark'>{exp.company} </h3>
              <p>
                <Moment format='DD/MM/YYYY'>{exp.from}</Moment> -{' '}
                {exp.current !== null && exp.to === null ? (
                  <span>Present</span>
                ) : (
                  <Moment format='DD/MM/YYYY'>{exp.to} </Moment>
                )}{' '}
              </p>
              <p>
                <strong>Position: </strong>
                {exp.title}
              </p>
              {exp.description && (
                <Fragment>
                  <p>
                    <strong>Description: </strong>
                    {exp.description}
                  </p>
                </Fragment>
              )}
            </div>
          </div>
        ))}
    </Fragment>
  );
};

export default ProfileExp;
