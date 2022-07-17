import { environment } from '../environments/environment';
import { appKey, appSecret } from '../kinvey.tokens';

import { Buffer } from 'buffer';

const baseUrl = environment.apiUserUrl;
const authHeaders = {
  Authorization: `Basic ${Buffer.from(`${appKey}:${appSecret}`).toString(
    'base64'
  )}`,
  'content-Type': 'application/json',
};

export const register = async (userData) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify(userData),
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  } else {
    throw result.description;
  }
};

export const login = async (userData) => {
  const response = await fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify(userData),
  });

  const result = await response.json();

  if (response.ok) {
    localStorage.setItem('authtoken', result['_kmd']['authtoken']);
    localStorage.setItem('username', result['username']);
    localStorage.setItem('id', result['_id']);
    localStorage.setItem('photo', result['photo']);
    result['_kmd']['roles'] !== undefined &&
    result['_kmd']['roles'].length !== 0
      ? localStorage.setItem('isAdmin', 'true')
      : localStorage.setItem('isAdmin', 'false');
    return result;
  } else {
    throw result.description;
  }
};

export const logout = async () => {
  const response = await fetch(`${baseUrl}/_logout`, {
    method: 'POST',
    headers: {
      Authorization: `Kinvey ${localStorage.getItem('authtoken')}`,
      'content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });
  
  if (response.ok) {
    localStorage.clear();
  } else {
    const result = await response.json();
    throw result.description;
  }
};

export const isLoggedIn = () => {
  return localStorage.getItem('authtoken') !== null;
};

export const isAdmin = () => {
  return localStorage.getItem('isAdmin') === 'true';
};
