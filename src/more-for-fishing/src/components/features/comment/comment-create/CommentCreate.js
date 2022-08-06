import { useContext, useState } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import * as commentService from '../../../../services/commentService';
import { toast } from 'react-toastify';

import './CommentCreate.css';

export const CommentCreate = ({ articleId }) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    content: '',
  });
  const { user } = useContext(AuthContext);

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    values.articleId = articleId;
    values.author = user.username;
    values.authorPicture = user.photo;
    values.likes = [];

    commentService
      .addComment(values)
      .then(() => {
        toast.success('Successfully Created comment!');
        setValues({ content: '' })
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const requiredField = (e) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: values[e.target.name].length < 1,
    }));
  };

  const isFormValid =
    values.content.length && !Object.values(errors).some((x) => x);

  return (
    <form onSubmit={submitHandler}>
      <h5 className="label">Add comment</h5>

      {/* content */}
      <p className="form-outline mb-4">
        <textarea
          type="text"
          id="addANote"
          className="form-control"
          rows={3}
          placeholder="Type comment..."
          name='content'
          value={values.content}
          onChange={changeHandler}
          onBlur={(e) => requiredField(e)}
        />
      </p>

      {errors.content && (
            <p className="alert alert-danger">Field is required!!</p>
          )}

      <button type="submit" className="btn btn-primary btn-sm" disabled={!isFormValid}>
        Submit comment
      </button>
    </form>
  );
};
