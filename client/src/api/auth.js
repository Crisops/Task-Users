export function fetchAuth (url, data) {
  return new Promise((resolve, reject) => {
    const headers = {
      Method: 'POST',
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Body: JSON.stringify(data)
    }

    fetch(url, headers)
      .then(response => response.json())
      .then(user => resolve(user))
      .catch(error => reject(error))
  })
}
