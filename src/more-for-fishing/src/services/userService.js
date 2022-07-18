import { environment } from '../environments/environment';

const baseUrl = environment.apiUserUrl;

export const getUser = async (profileId) => {
  const response = await fetch(`${baseUrl}/${profileId}`, {
    method: 'GET',
    headers: {
      Authorization: `Kinvey ${localStorage.getItem('authtoken')}`,
    },
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  } else {
    throw result.description;
  }
};