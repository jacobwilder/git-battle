import axios from 'axios';

export const getProfile = username => {
  return axios.get(`/api/${username}`);
};

export const getUserData = (username1,username2) => {
    console.log(username1, username2);
    return axios.get(`/api/${username1}/${username2}`);
};

export const getUserRepos = username => {
  return axios.get(`api/repos/${username}`);
};


