import axios from 'axios';

async function getAllEvent() {
  const data = await axios.get('http://10.0.2.2:8091/events').then(result => {
    return result.data;
  });
  return data;
}
export default getAllEvent;
