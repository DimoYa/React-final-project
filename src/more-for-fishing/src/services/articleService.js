import { environment } from '../environments/environment';

const baseUrl = environment.apiAppUrl;
const articleEndPoint = `${baseUrl}/article`;

export const createArticle = async (articleData) => {
  const response = await fetch(articleEndPoint, {
    method: 'POST',
    headers: {
      Authorization: `Kinvey ${localStorage.getItem('authtoken')}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(articleData),
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  } else {
    throw result.description;
  }
};

export const getAllArticles = async () => {
  const response = await fetch(`${articleEndPoint}?query={}&sort={"_kmd.ect": -1}`, {
    method: 'GET',
    headers: {
      Authorization: `Kinvey ${localStorage.getItem('authtoken')}`,
      'content-type': 'application/json',
    },
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  } else {
    throw result.description;
  }
};
