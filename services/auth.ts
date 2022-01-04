import {LOGIN_URL, REGISTER_URL} from '../env';

export const loginAsync = (email: string, password: string) => {
  return fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password, returnSecureToken: true}),
  });
};

export const registerAsync = (email: string, password: string) => {
  return fetch(REGISTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password, returnSecureToken: true}),
  });
};
