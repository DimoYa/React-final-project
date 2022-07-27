import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as articleService from '../../../../services/articleService';
import { Loading } from '../../../shared/Loading';
import { ArticleItem } from '../article-item/ArticleItem';

import './ArticleList.css';

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    articleService
      .getAllArticles()
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
      <h2>Articles</h2>
      {isLoading ? (
        <Loading />
      ) : articles.length !== 0 ? (
        articles.map((x) => <ArticleItem key={x._id} article={x} />)
      ) : (
        <p className="create">
          There are no articles created yet.
          <Link to="/article/create">Create new article</Link>
        </p>
      )}
    </div>
  );
};
