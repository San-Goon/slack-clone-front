import axios from 'axios';

const fetcher = (url: string) => {
  return axios
    .get(`https://sleact.nodebird.com${url}`, {
      withCredentials: true,
    })
    .then((response) => response.data);
};

export default fetcher;
