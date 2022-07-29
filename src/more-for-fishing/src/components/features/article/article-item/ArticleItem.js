import { Link } from 'react-router-dom';
import './ArticleItem.css'

export const ArticleItem = ({ article }) => {
  return (
    <div className="card flex-md-row mb-4 shadow-sm h-md-250 article-item">
      <div className="card-body d-flex flex-column align-items-start">
        <h4 className="d-inline-block mb-2">{article.headline}</h4>
        <div className="mb-1 text-muted small">
          <b>Created by:</b>
          <span className="fa fa-pencil p-1"> {article.author}</span>
        </div>
        <div className="mb-1 text-muted small">
          <b>Modified by:</b>
          <span className="fa fa-pencil p-1"> {article.modified}</span>
        </div>
        <div className="mb-1 text-muted small">
          <b>Published:</b>
          <span className="fas fa-calendar p-1"> {article._kmd['ect']}</span>
          <span className="fa fa-clock-o p-1"> {article._kmd['ect']}</span>
        </div>
        <div className="mb-1 text-muted small">
          <b>Modified:</b>
          <span className="fas fa-calendar p-1"> {article._kmd['lmt']}</span>
          <span className="fa fa-clock-o p-1"> {article._kmd['lmt']}</span>
        </div>
        <p className="text-muted small text-justify">{article.content.length > 500 ? article.content.substring(0, 500) + "..." : article.content}</p>
        <Link to="#" className="btn btn-outline-primary">Continue reading</Link>
      </div>
      <img
        className="card-img-right flex-auto d-none d-lg-block"
        alt="Thumbnail"
        src={article.image}
      />
    </div>
  );
};
