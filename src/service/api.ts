import axios from 'axios';

const BASE_URL = 'https://run.mocky.io/v3/372f031c-eeb5-471f-a620-4a41d0e1b027';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    throw error;
  }
};

