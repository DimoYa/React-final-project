export const ArticleCreate = () => {
  return (
    <form>
      <div className="container article">
        <fieldset>
          <h2 className="label">Create new article</h2>
          {/* headline */}
          <p className="field field-icon">
            <label htmlFor="headline">
              <span>
                <i className="fas fa-heading" />
              </span>
            </label>
            <input
              formcontrolname="headline"
              type="text"
              name="headline"
              id="headline"
              placeholder="Enter your title"
            />
          </p>

          {/* content */}
          <p className="field field-icon">
            <textarea
              rows={8}
              formcontrolname="content"
              placeholder="Enter yout content here"
              defaultValue={''}
            />
          </p>

          {/* imageUrl */}
          <p className="field field-icon">
            <label htmlFor="image">
              <span>
                <i className="fa fa-image" />
              </span>
            </label>
            <input
              formcontrolname="image"
              type="text"
              name="image"
              id="image"
              placeholder="Add image link"
            />
          </p>
          <button className="btn btn-primary btn-block">
            Submit your article
          </button>
        </fieldset>
      </div>
    </form>
  );
};
