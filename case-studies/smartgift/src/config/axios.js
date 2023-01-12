import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

// Create `axios-cache-adapter` instance
const cache = setupCache({
  // minutes seconds milliseconds
  maxAge: 60 * 60 * 1000
});

// ignore eslint below
// Create `axios` instance passing the newly created `cache.adapter`
export const api = axios.create({
  adapter: cache.adapter,
  baseURL: 'https://api-dev.smartgiftit.com/apps/products',
  headers: {
    // eslint-disable-next-line
    'x-smartgift-app-id': import.meta.env.VITE_SMARTGIFT_APP_ID,
    'x-smartgift-app-secret': import.meta.env.VITE_SMARTGIFT_APP_SECRET
  }
});
