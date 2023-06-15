import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export function setToken(token) {
  instance.defaults.headers.common['Authorization'] = token;
}

export function deleteToken() {
  delete instance.defaults.headers.common['Authorization'];
}

export async function signUP(value) {
  const { data } = await instance.post('/users/signup', value);
  setToken(data.token);
  return data;
}

export async function logIN(value) {
  const { data } = await instance.post('/users/login', value);
  setToken(data.token);
  return data;
}

export async function fetchContacts() {
  const { data } = await instance('/contacts');
  return data;
}

export async function addContacts(contact) {
  const { data } = await instance.post('/contacts', contact);
  return data;
}

export async function deleteContacts(id) {
  const { data } = await instance.delete('/contacts/' + id);
  return data;
}
