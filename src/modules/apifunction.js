const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const id = 'p8vrDc25lBikFAt27fzI';

const game = async (name) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(`{name: ${name}}`),
  });
  const response = await res.json();
  return response;
};

const getData = async () => {
  const response = await fetch(`${url}${id}/scores/`);
  const data = await response.json();
  return data.result;
};

const createData = async (data) => {
  const response = await fetch(`${url}${id}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  return res.result;
};

export { game, getData, createData };