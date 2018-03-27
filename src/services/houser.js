import axios from 'axios';

export const postProperty = function() {
  axios.post('http://localhose:8080/api/properties')
  .then(res => res.data)
}