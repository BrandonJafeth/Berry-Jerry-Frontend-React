
const UrlApi = 'http://localhost:3000';

export const fetchData = (endpoint) => {
  return fetch(`${UrlApi}/${endpoint}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error loading ${endpoint}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error(`Error loading ${endpoint}:`, error);
      throw error;
    });
};
