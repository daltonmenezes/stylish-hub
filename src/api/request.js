export default endpoint => 
  fetch(endpoint, { method: 'get' })
    .then(res => res.json())