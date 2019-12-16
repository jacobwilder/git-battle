import axios from 'axios';

export const getProfile = username => {
  return axios.get(`/api/user/profile/${username}`);
};

export const getUserList = usernameList => {
  // create url by looping through `usernameList` array
  // TODO: use URI encode function
  let url = `/api/user/list/?`;
  for(let i = 0; i < usernameList.length; i++) {
    url += `username=${usernameList[i]}`;
    if (i < usernameList.length) {
      url += `&`;
    }
  }
  console.log(url);
  return axios.get(url);
}

export const getUserData = (username1,username2) => {
    console.log(username1, username2);
    return axios.get(`/api/user/${username1}/${username2}`);
};

export const getUserRepos = username => {
  return axios.get(`/api/user/repos/${username}`);
};

export const postUserData = userData => {
  return axios.post(`/api/data/scoreboard`, userData);
};

export const findUserData = userData => {
  return axios.get(`/api/data/scoreboard`, userData);
};


