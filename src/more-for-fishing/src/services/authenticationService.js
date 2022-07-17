import { environment } from '../environments/environment';
import { appKey, appSecret } from '../kinvey.tokens';

import { Buffer } from 'buffer';

const baseUrl = environment.apiUserUrl;

export const register = async (userData) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${appKey}:${appSecret}`).toString(
        'base64'
      )}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  } else {
    throw result.description;
  }
};


