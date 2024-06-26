import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const fetchImages = (query = '', page = 1) => {
  const limit = 6;
  const skip = (page - 1) * limit;
  const url = query ? `${API_URL}/search` : API_URL;

  return axios.get(url, {
    params: {
      q: query,
      limit,
      skip,
    },
  });
};

export const fetchImageDetails = (id) => {
  return axios.get(`${API_URL}/${id}`);
};
