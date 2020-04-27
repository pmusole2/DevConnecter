import React, { Fragment } from 'react';
import Moment from 'react-moment';

const ProfileEdu = ({ profile: { education } }) => {
  return (
    <Fragment>
      {education &&
        education.map(edu => (
          <div key={edu._id}>
            <h2 className='text-primary'>Education</h2>
            <div>
              <h3>{edu.school} </h3>
              <p>
                <Moment format='DD/MM/YYYY'>{edu.from}</Moment> -{' '}
                {edu.current !== null && edu.to === null ? (
                  <span>Present</span>
                ) : (
                  <Moment format='DD/MM/YYYY'>{edu.to} </Moment>
                )}{' '}
              </p>
              <p>
                <strong>Degree: </strong>
                {edu.degree}
              </p>
              <p>
                <strong>Field Of Study: </strong>
                {edu.fieldofstudy}
              </p>
              {edu.description && (
                <p>
                  <strong>Description: </strong> {edu.description}
                </p>
              )}
            </div>
          </div>
        ))}
    </Fragment>
  );
};

export default ProfileEdu;
