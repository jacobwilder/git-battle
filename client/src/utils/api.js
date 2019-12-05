import axios from 'axios';

export const getProfile = username => {
  return axios.get(`/api/${username}`);
};

export const getPlayers = (username1,username2,username3) => {
    console.log(username1, username2, username3);
    return axios.get(`/api/${username1}/${username2}/${username3}`);
};

export const getUserRepos = username => {
  return axios.get(`api/repos/${username}`);
};


