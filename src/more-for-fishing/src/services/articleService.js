import { environment } from '../environments/environment';
import * as request from './requster';

const baseUrl = environment.apiAppUrl;
const articleEndPoint = `${baseUrl}/article`;

export const createArticle = async (articleData) => {
  return await request.post(articleEndPoint, articleData);
};

export const getAllArticles = async () => {
  return await request.get(
    `${articleEndPoint}?query={}&sort={"_kmd.ect": -1}`
  );
};