import axios from 'axios';

const resourcePath = 'http://10.0.2.2:8091';

async function getAllEvent() {
  const data = await axios.get(resourcePath+'/events').then((result) => {
    return result.data;
  })
  .catch((reason) => {
    console.log(reason)
  });
  return data;
}

async function getEventById(id) {
  const data = await axios.get(resourcePath + '/event/' + id).then((result) => {
    return result.data;
  })
  .catch((reason) => {
    console.log(reason);
  })
  return data;
}

export {getAllEvent, getEventById};
