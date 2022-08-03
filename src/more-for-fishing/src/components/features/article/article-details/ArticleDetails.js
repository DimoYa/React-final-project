import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as articleService from '../../../../services/articleService';
import { Loading } from '../../../shared/Loading';
import Moment from 'moment';
import { AuthContext } from '../../../../context/AuthContext';
import { submitHandler } from '../../../shared/confirm-box/Confirm';

import './ArticleDetails.css';

export const ArticleDetails = () => {
  Moment.locale('en');
  const { articleId } = useParams();

  useEffect(() => {
    articleService
      .getArticleById(articleId)
      .then((data) => {
        setArticle(data);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);

  const [article, setArticle] = useState({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const canModify = (articleAuthor) => {
    return articleAuthor === user.username || user.isAdmin;
  };

  const deleteHandler = () => {
    submitHandler(
      confirmDeleteHandler,
      'Confirm deletion',
      `Are you sure that you want to delete ${article.headline}?`
    );
  };

  const confirmDeleteHandler = () => {
    articleService
      .deleteArticle(articleId)
      .then(() => {
        navigate('/article/list');
        toast.success('Successfully deleted article!');
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div className="container article">
      <>
        {Object.keys(article).length === 0 ? (
          <Loading />
        ) : (
          <>
            <h4 className="panel-title">{article.headline}</h4>
            <div className="mb-2">
              {article.image && <img alt="Thumbnail" src={article.image} />}
            </div>
            <div className="d-flex flex-column align-items-start menu">
              <div className="mb-1 text-muted small">
                {article._kmd['ect'] === article._kmd['lmt'] ? (
                  <>
                    <b>Created by:</b>
                    <span className="fa fa-pencil p-1"> {article.author}</span>
                  </>
                ) : (
                  <>
                    {' '}
                    <b>Modified by:</b>
                    <span className="fa fa-pencil p-1">
                      {' '}
                      {article.modified}
                    </span>
                  </>
                )}
              </div>
              <div className="mb-1 text-muted small">
                {article._kmd['ect'] === article._kmd['lmt'] ? (
                  <>
                    <b>Published:</b>
                    <span className="fas fa-calendar p-1">
                      {' '}
                      {Moment(article._kmd['ect']).format('d MMM yyyy')}
                    </span>
                    <span className="fa fa-clock-o p-1">
                      {' '}
                      {Moment(article._kmd['ect']).format('HH:mm')}
                    </span>
                  </>
                ) : (
                  <>
                    <b>Modified:</b>
                    <span className="fas fa-calendar p-1">
                      {' '}
                      {Moment(article._kmd['lmt']).format('d MMM yyyy')}
                    </span>
                    <span className="fa fa-clock-o p-1">
                      {' '}
                      {Moment(article._kmd['lmt']).format('HH:mm')}
                    </span>
                  </>
                )}
              </div>
            </div>
            <hr className="menu mb-1 mt-1" />
            <div className="article-content">
              <p className="text-justify">{article.content}</p>
            </div>
            {canModify(article.author) && (
              <div id="buttons">
                <Link
                  type="button"
                  to='edit'
                  className="btn btn-success"
                >
                  Edit article
                </Link>
                &nbsp;
                <button type="button" className="btn btn-danger" onClick={deleteHandler}>
                  Delete article
                </button>
              </div>
            )}
          </>
        )}
      </>
    </div>
  );
};
