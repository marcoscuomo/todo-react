import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.cypress.io/todos?_limit=10'    
});