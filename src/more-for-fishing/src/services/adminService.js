import { environment } from '../environments/environment';
import { appKey, appMasterSecret } from '../kinvey.tokens';
import { Buffer } from 'buffer';

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

export const suspendUser = async (profileId) => {
  const response = await fetch(`${baseUrl}/${profileId}?soft=true`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      Authorization: `Kinvey ${localStorage.getItem('authtoken')}`,
    },
  });

  if (!response.ok) {
    const result = await response.json();
    throw result.description;
  }
};

export const restoreUser = async (profileId) => {
  const response = await fetch(`${baseUrl}/${profileId}/_restore`, {
    method: 'POST',
    headers: {
        Authorization: `Basic ${Buffer.from(`${appKey}:${appMasterSecret}`).toString(
            'base64'
          )}`,
        'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const result = await response.json();
    throw result.description;
  }
};
