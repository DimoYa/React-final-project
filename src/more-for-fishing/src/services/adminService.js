import { environment } from '../environments/environment';

const baseUrl = environment.apiUserUrl;

export const getAllUsers = async (profileId) => {
  const response = await fetch(baseUrl, {
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