const axios = require('axios').default;

const BASE_URL = 'https://api.vimeo.com/categories/adsandcommercials/videos';

const token = '254abd86420beca439be329ea7869e6c';

export const fetchVideo = async function () {
  const params = {
    per_page: 8,
    page: 4,
  };
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
