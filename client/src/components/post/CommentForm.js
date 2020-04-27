import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment, deleteComment } from '../../actions/post';

const CommentForm = ({ postID, addComment }) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    addComment(postID, { text });
    setText('');
  };

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Leave a comment...</h3>
      </div>
      <form onSubmit={e => onSubmit(e)} className='form my-1'>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        ></textarea>
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

export default connect(null, { addComment, deleteComment })(CommentForm);
