export function fetchAuth (url, data) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      }
    }

    fetch(url, options)
      .then(response => response.json())
      .then(user => resolve(user))
      .catch(error => reject(error))
  })
}

export function verifyToken (url) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      }
    }

    fetch(url, options)
      .then(response => response.json())
      .then(user => resolve(user))
      .catch(error => reject(error))
  })
}
