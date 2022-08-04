import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../context/AuthContext';
import * as articleService from '../../../../services/articleService';
import { Loading } from '../../../shared/Loading';
import { ArticleItem } from '../article-item/ArticleItem';

import './ArticleUser.css';

export const ArticleUser = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    articleService
      .getUserArticles(user.username)
      .then((data) => {
        setArticles(data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);

  return (
    <div className="container article">
      <h2>My Articles</h2>
      {isLoading ? (
        <Loading />
      ) : articles.length !== 0 ? (
        articles.map((x) => <ArticleItem key={x._id} article={x} />)
      ) : (
        <p className="create">
          You haven't created any articles. <Link to="/article/create">Create new article</Link>

          Want to read articles from other authors? Go to <Link to="/article/list">All articles</Link>
          
        </p>
      )}
    </div>
  );
};
