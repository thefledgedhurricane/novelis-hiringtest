import axios from 'axios';

export default axios.create({
  baseURL:
    'https://newsapi.org/v2/everything?q=bitcoin&apiKey=6d6a8abdb52341f9b01140e37990ec2c',
});
