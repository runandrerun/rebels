export const fetchShopItems = async () => {
  const URL = 'https://applicant-dev.misfitsmarket.com/api/test/v1';
  const response = await fetch(URL);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body.data.items;
};

export const purchaseItems = async (token, productId) => {
  const URL = `https://applicant-dev.misfitsmarket.com/api/test/v1/${productId}`

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Customer-Token': token
    }
  });
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};
