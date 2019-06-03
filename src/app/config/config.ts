import envConfig from './.env';
import { environment } from '../../environments/environment';

export const config = {
  'baseUrl': 'https://localhost:3000/api',
  'jsonPlaceholderUrl': 'https://jsonplaceholder.typicode.com/posts'
};

export const appConfig = {
  ...config,
  ...environment,
  ...envConfig
};
