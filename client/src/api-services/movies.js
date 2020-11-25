import axios from 'axios';
import { moviesApi, moviesApiKey } from '../config';
class Movies {
  getList (searchQuery) {
    return new Promise((resolve, reject) => {
      axios.get(`${moviesApi}/?apikey=${moviesApiKey}&s=${searchQuery}`)
        .then(({data}) => {
          if (data.Error) {
            reject(data.Error);
          } else {
            resolve(data.Search);
          }
        })
    })
  };

  getDetails (id) {
    return new Promise((resolve => {
      axios.get(`${moviesApi}/?apikey=${moviesApiKey}&i=${id}`)
        .then((response) => {
          resolve(response.data);
        })
    }));
  };
};

export default new Movies ();