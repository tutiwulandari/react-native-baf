import axios from 'axios';

const resourcePath = 'http://10.0.2.2:8091';

async function getAllTicket() {
  const data = await axios
    .get(resourcePath + '/tickets')
    .then(result => {
      return result.data;
    })
    .catch(reason => {
      console.log(reason);
    });
  return data;
}

async function getTicketById(id) {
  const data = await axios
    .get(resourcePath + '/ticket/' + id)
    .then(result => {
      return result.data;
    })
    .catch(reason => {
      console.log(reason);
    });
  return data;
}

async function createTicket(ticket) {
  var response = '';
  await axios
    .post(resourcePath + '/ticket', ticket)
    .then(res => {
      response = res.status;
    })
    .catch(reason => console.log(reason));
  return response;
}

export {getAllTicket, getTicketById, createTicket};
