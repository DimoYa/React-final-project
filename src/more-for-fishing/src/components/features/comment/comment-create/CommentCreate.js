import './CommentCreate.css';

export const CommentCreate = () => {
  return (
    <form>
      <h5 className="label">Add comment</h5>

      {/* content */}
      <p className="form-outline mb-4">
        <textarea
          type="text"
          id="addANote"
          className="form-control"
          rows={3}
          placeholder="Type comment..."
          formcontrolname="content"
          defaultValue={''}
        />
      </p>

      <button type="submit" className="btn btn-primary btn-sm">
        Submit comment
      </button>
    </form>
  );
};
