import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as articleService from '../../../../services/articleService';
import * as commenService from '../../../../services/commentService';
import { Loading } from '../../../shared/Loading';
import Moment from 'moment';
import { AuthContext } from '../../../../context/AuthContext';
import { submitHandler } from '../../../shared/confirm-box/Confirm';
import { CreateComment } from '../../comment/comment-create/CommentCreate';

import './ArticleDetails.css';

export const ArticleDetails = () => {
  Moment.locale('en');
  let isExpanded = false;
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
  const [comments, setComments] = useState({});
  const [isLoading, setLoading] = useState(true);
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

  useEffect(() => {
    commenService
      .getAllCommentsByArticle(articleId)
      .then((data) => {
        setComments(data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);

  const toggle = () => {
    isExpanded = !isExpanded;
  };

  return (
    <>
      <div className="container article">
        <>
          {Object.keys(article).length === 0 ? (
            <Loading />
          ) : (
            <>
              <h4 className="panel-title">{article.headline}</h4>
              <div className="mb-2">
                {article.image && (
                  <img alt="Thumbnail" id="image" src={article.image} />
                )}
              </div>
              <div className="d-flex flex-column align-items-start menu">
                <div className="mb-1 text-muted small">
                  <b>Created by:</b>
                  <span className="fa fa-pencil p-1"> {article.author}</span>
                </div>

                <div className="mb-1 text-muted small">
                  <b>Published:</b>
                  <span className="fas fa-calendar p-1">
                    {' '}
                    {Moment(article._kmd['ect']).format('d MMM yyyy')}
                  </span>
                </div>
              </div>

              {article._kmd['ect'] !== article._kmd['lmt'] ? (
                <>
                  <div className="d-flex flex-column align-items-start menu">
                    <div className="mb-1 text-muted small">
                      <b>Modified by:</b>
                      <span className="fa fa-pencil p-1">
                        {' '}
                        {article.modified}
                      </span>
                    </div>

                    <div className="mb-1 text-muted small">
                      <b>Modified:</b>
                      <span className="fas fa-calendar p-1">
                        {' '}
                        {Moment(article._kmd['lmt']).format('d MMM yyyy')}
                      </span>
                      <span className="fa fa-clock-o p-1">
                        {' '}
                        {Moment(article._kmd['lmt']).format('HH:mm')}
                      </span>
                    </div>
                  </div>
                </>
              ) : null}
              <hr className="menu mb-1 mt-1" />
              <div className="article-content">
                <p className="text-justify">{article.content}</p>
              </div>
              {canModify(article.author) && (
                <div id="buttons">
                  <Link type="button" to="edit" className="btn btn-success">
                    Edit article
                  </Link>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={deleteHandler}
                  >
                    Delete article
                  </button>
                </div>
              )}
            </>
          )}
        </>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-0 border">
            <div className="card-body p-4">
              <CreateComment />
              {comments && (
                <div className="mt-5">
                  <button
                    className="accordion-button"
                    aria-expanded={isExpanded}
                    onClick={toggle}
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse"
                    aria-controls="collapseExample"
                  >
                    <span>
                      {isExpanded ? 'Hide comments' : 'Show comments'}
                    </span>
                  </button>
                  <div className="collapse" id="collapse">
                    <div className="card card-body">
                      {isLoading ? (
                        <Loading />
                      ) : comments.length !== 0 ? (
                        comments.map((x) => (
                          <CommentItem key={x._id} comment={x} />
                        ))
                      ) : null}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
