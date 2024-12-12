import axios from 'axios';

const BASE_URL = 'https://run.mocky.io/v3/d1e2367a-7414-4a6f-a93e-4e4ba281c358';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching user data:', error.message);
    } else {
      console.error('Error fetching user data:', String(error));
    }
    throw error;
  }
};
